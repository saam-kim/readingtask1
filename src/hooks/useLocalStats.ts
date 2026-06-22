import { useState, useCallback } from 'react';
import type { AppStats } from '../utils/storage';
import { getStats, recordQuestionResult, recordSessionCompletion, removeQuestionFromReview, clearAllStats } from '../utils/storage';

export function useLocalStats() {
  const [stats, setStats] = useState<AppStats>(() => getStats());

  const refreshStats = useCallback(() => {
    setStats(getStats());
  }, []);

  const recordResult = useCallback((level: number, id: string, isCorrect: boolean) => {
    const updated = recordQuestionResult(level, id, isCorrect);
    setStats(updated);
  }, []);

  const recordSession = useCallback((correct: number, total: number) => {
    const updated = recordSessionCompletion(correct, total);
    setStats(updated);
  }, []);

  const removeReview = useCallback((id: string) => {
    const updated = removeQuestionFromReview(id);
    setStats(updated);
  }, []);

  const clearStats = useCallback(() => {
    const updated = clearAllStats();
    setStats(updated);
  }, []);

  return {
    stats,
    recordResult,
    recordSession,
    removeReview,
    clearStats,
    refreshStats
  };
}
