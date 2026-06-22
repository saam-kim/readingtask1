export interface SessionHistoryEntry {
  date: string;
  correct: number;
  total: number;
  accuracy: number;
}

export interface AppStats {
  totalSolved: number;
  totalCorrect: number;
  totalWrong: number;
  solvedByLevel: { [level: number]: number };
  correctByLevel: { [level: number]: number };
  lastActiveDate: string;
  incorrectIds: string[]; // All unique question IDs that were ever failed
  reviewList: string[];   // Active review questions
  history: SessionHistoryEntry[]; // Session history entries for charting
}

const STORAGE_KEY = 'toefl_writing_practice_stats';

const DEFAULT_STATS: AppStats = {
  totalSolved: 0,
  totalCorrect: 0,
  totalWrong: 0,
  solvedByLevel: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  correctByLevel: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  lastActiveDate: '',
  incorrectIds: [],
  reviewList: [],
  history: []
};

export function getStats(): AppStats {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return DEFAULT_STATS;
    const parsed = JSON.parse(data);
    // Ensure all fields exist
    return {
      ...DEFAULT_STATS,
      ...parsed,
      solvedByLevel: { ...DEFAULT_STATS.solvedByLevel, ...parsed.solvedByLevel },
      correctByLevel: { ...DEFAULT_STATS.correctByLevel, ...parsed.correctByLevel },
      incorrectIds: parsed.incorrectIds || [],
      reviewList: parsed.reviewList || [],
      history: parsed.history || []
    };
  } catch (e) {
    console.error('Error parsing stats from localStorage:', e);
    return DEFAULT_STATS;
  }
}

export function saveStats(stats: AppStats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Error saving stats to localStorage:', e);
  }
}

export function recordQuestionResult(level: number, id: string, isCorrect: boolean): AppStats {
  const stats = getStats();
  
  stats.totalSolved += 1;
  stats.solvedByLevel[level] = (stats.solvedByLevel[level] || 0) + 1;
  
  if (isCorrect) {
    stats.totalCorrect += 1;
    stats.correctByLevel[level] = (stats.correctByLevel[level] || 0) + 1;
  } else {
    stats.totalWrong += 1;
    
    // Add to incorrectIds if not already there
    if (!stats.incorrectIds.includes(id)) {
      stats.incorrectIds.push(id);
    }
    
    // Add to reviewList if not already there
    if (!stats.reviewList.includes(id)) {
      stats.reviewList.push(id);
    }
  }
  
  stats.lastActiveDate = new Date().toLocaleDateString('ko-KR');
  
  saveStats(stats);
  return stats;
}

export function recordSessionCompletion(correct: number, total: number): AppStats {
  const stats = getStats();
  if (!stats.history) stats.history = [];
  
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  
  // Format date to MM/DD (e.g., 6.22)
  const dateObj = new Date();
  const dateStr = `${dateObj.getMonth() + 1}.${dateObj.getDate()}`;
  
  const newEntry: SessionHistoryEntry = {
    date: dateStr,
    correct,
    total,
    accuracy
  };
  
  stats.history.push(newEntry);
  
  // Keep only the last 7 sessions to fit the chart nicely
  if (stats.history.length > 7) {
    stats.history = stats.history.slice(-7);
  }
  
  saveStats(stats);
  return stats;
}

export function removeQuestionFromReview(id: string): AppStats {
  const stats = getStats();
  stats.reviewList = stats.reviewList.filter(item => item !== id);
  saveStats(stats);
  return stats;
}

export function clearAllStats(): AppStats {
  saveStats(DEFAULT_STATS);
  return DEFAULT_STATS;
}
