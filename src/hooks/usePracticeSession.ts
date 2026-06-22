import { useState, useEffect, useCallback, useRef } from 'react';
import type { Question } from '../types/question';
import { shuffleArray } from '../utils/shuffle';
import { checkAnswer } from '../utils/scoring';

export type AnswerStatus = 'typing' | 'correct' | 'incorrect' | 'showing_answer';

export interface PracticeSessionOptions {
  questions: Question[];
  limitSeconds: number; // 0 for off, or 30, 45, 60
  onRecordResult: (level: number, id: string, isCorrect: boolean) => void;
  isMockExamMode?: boolean; // If true, timer is global
}

export function usePracticeSession({
  questions,
  limitSeconds,
  onRecordResult,
  isMockExamMode = false
}: PracticeSessionOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState<(number | null)[]>([]);
  const [shuffledChunks, setShuffledChunks] = useState<string[]>([]);
  const [status, setStatus] = useState<AnswerStatus>('typing');
  const [attempts, setAttempts] = useState(0);
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState(isMockExamMode ? 1200 : limitSeconds); // 1200s = 20 mins global
  const [hasTimedOut, setHasTimedOut] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentQuestion: Question | undefined = questions[currentIndex];
  const totalBlanks = currentQuestion ? currentQuestion.answer.length : 0;

  // Initialize/shuffle chunks for current question
  useEffect(() => {
    if (currentQuestion) {
      setShuffledChunks(shuffleArray(currentQuestion.chunks));
      setSelectedIndexes(Array(totalBlanks).fill(null));
      setStatus('typing');
      setAttempts(0);
      
      // If NOT mock exam mode, reset timer per question
      if (!isMockExamMode) {
        setTimeLeft(limitSeconds);
        setHasTimedOut(false);
      }
    }
  }, [currentQuestion, limitSeconds, isMockExamMode, totalBlanks]);

  // Global or local timer logic
  useEffect(() => {
    // If no timer limit or lock status, stop timer
    if (isMockExamMode) {
      // Mock Exam Mode runs a global timer from the start
      if (status === 'showing_answer' && currentIndex === questions.length - 1) {
        if (timerRef.current) clearInterval(timerRef.current);
        return;
      }
    } else {
      // Per-question timer
      if (limitSeconds <= 0 || status === 'correct' || status === 'showing_answer') {
        if (timerRef.current) clearInterval(timerRef.current);
        return;
      }
    }

    // Start timer interval
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setHasTimedOut(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, limitSeconds, status, isMockExamMode, questions.length]);

  // Touch chunk from bank (slots in first empty slot)
  const selectChunk = useCallback((chunkIndex: number) => {
    if (status === 'correct' || status === 'showing_answer') return;
    
    setSelectedIndexes((prev) => {
      // Check if already placed in some slot
      if (prev.includes(chunkIndex)) return prev;
      
      const copy = [...prev];
      // Find first empty slot (null)
      const firstEmptyIdx = copy.indexOf(null);
      if (firstEmptyIdx !== -1) {
        copy[firstEmptyIdx] = chunkIndex;
      }
      return copy;
    });
  }, [status]);

  // Touch selected chunk in AnswerArea to remove it
  const deselectChunk = useCallback((slotIndex: number) => {
    if (status === 'correct' || status === 'showing_answer') return;

    setSelectedIndexes((prev) => {
      const copy = [...prev];
      copy[slotIndex] = null;
      return copy;
    });
  }, [status]);

  // Drag and drop chunk placement
  const dropChunk = useCallback((chunkIndex: number, targetSlotIndex: number) => {
    if (status === 'correct' || status === 'showing_answer') return;

    setSelectedIndexes((prev) => {
      const copy = [...prev];
      
      // If the chunk is already placed in another slot, clear that slot
      const existingSlotIdx = copy.indexOf(chunkIndex);
      if (existingSlotIdx !== -1) {
        copy[existingSlotIdx] = null;
      }
      
      // Place the chunk in the target slot
      copy[targetSlotIndex] = chunkIndex;
      return copy;
    });
  }, [status]);

  // Undo button (removes the rightmost non-null selected chunk)
  const undo = useCallback(() => {
    if (status === 'correct' || status === 'showing_answer') return;
    
    setSelectedIndexes((prev) => {
      const copy = [...prev];
      // Find the last index that is not null
      for (let i = copy.length - 1; i >= 0; i--) {
        if (copy[i] !== null) {
          copy[i] = null;
          break;
        }
      }
      return copy;
    });
  }, [status]);

  // Clear button
  const clear = useCallback(() => {
    if (status === 'correct' || status === 'showing_answer') return;
    setSelectedIndexes(Array(totalBlanks).fill(null));
  }, [status, totalBlanks]);

  // Check Answer
  const handleCheckAnswer = useCallback(() => {
    if (!currentQuestion) return;
    
    // Construct user answer. If any slot is empty, it maps to undefined
    const userChunks = selectedIndexes.map(idx => idx === null ? '' : shuffledChunks[idx]);
    const isCorrect = checkAnswer(userChunks, currentQuestion.answer);
    const isFirstAttempt = attempts === 0;

    if (isCorrect) {
      setStatus('correct');
      if (isFirstAttempt) {
        onRecordResult(currentQuestion.level, currentQuestion.id, true);
      }
    } else {
      setStatus('incorrect');
      setAttempts(prev => prev + 1);
      if (isFirstAttempt) {
        onRecordResult(currentQuestion.level, currentQuestion.id, false);
      }
    }
  }, [selectedIndexes, shuffledChunks, currentQuestion, onRecordResult, attempts]);

  // Try Again button
  const tryAgain = useCallback(() => {
    setStatus('typing');
  }, []);

  // Show Answer button
  const showAnswer = useCallback(() => {
    const isFirstAttempt = attempts === 0;
    setStatus('showing_answer');
    
    if (currentQuestion && isFirstAttempt) {
      onRecordResult(currentQuestion.level, currentQuestion.id, false);
    }
    
    // Automatically construct the correct answer index arrangement
    if (currentQuestion) {
      const correctIndices: (number | null)[] = [];
      const tempShuffled = [...shuffledChunks];
      
      currentQuestion.answer.forEach((word) => {
        const foundIdx = tempShuffled.findIndex((chunk, i) => chunk === word && !correctIndices.includes(i));
        correctIndices.push(foundIdx !== -1 ? foundIdx : null);
      });
      
      setSelectedIndexes(correctIndices);
    }
  }, [currentQuestion, shuffledChunks, attempts, onRecordResult]);

  // Next button
  const nextQuestion = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, questions.length]);

  // Convert selectedIndexes list to strings for display
  const selectedChunks = selectedIndexes.map(idx => idx === null ? '' : shuffledChunks[idx]);

  return {
    currentQuestion,
    currentIndex,
    selectedIndexes,
    selectedChunks,
    shuffledChunks,
    status,
    timeLeft,
    hasTimedOut,
    selectChunk,
    deselectChunk,
    dropChunk,
    undo,
    clear,
    checkAnswer: handleCheckAnswer,
    tryAgain,
    showAnswer,
    nextQuestion,
    totalQuestions: questions.length
  };
}
