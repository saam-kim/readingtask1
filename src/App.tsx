import { useState } from 'react';
import { questions } from './data/questions';
import { HomeScreen } from './components/HomeScreen';
import { PracticeScreen } from './components/PracticeScreen';
import { ResultScreen } from './components/ResultScreen';
import { useLocalStats } from './hooks/useLocalStats';
import type { Question } from './types/question';

type ScreenState = 'home' | 'practice' | 'result';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('home');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [timerLimit, setTimerLimit] = useState<number>(0);
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [isMockExamMode, setIsMockExamMode] = useState<boolean>(false);
  const [dragAndDropEnabled, setDragAndDropEnabled] = useState<boolean>(false);
  
  // Local storage statistics state manager
  const { stats, recordResult, recordSession, removeReview, clearStats } = useLocalStats();

  // Session stats for ResultScreen
  const [sessionSummary, setSessionSummary] = useState({
    total: 0,
    correct: 0,
    wrong: 0,
    failedIds: [] as string[]
  });

  // Start a new practice or review session
  const handleStartSession = (
    selectedQuestions: Question[],
    limit: number,
    isReview: boolean,
    isMockExam: boolean = false
  ) => {
    setActiveQuestions(selectedQuestions);
    setTimerLimit(limit);
    setIsReviewMode(isReview);
    setIsMockExamMode(isMockExam);
    setScreen('practice');
  };

  // Complete session and transition to result screen
  const handleFinishSession = (
    correct: number,
    wrong: number,
    failedIds: string[]
  ) => {
    // Record to history trend database in localStorage
    recordSession(correct, activeQuestions.length);

    setSessionSummary({
      total: activeQuestions.length,
      correct,
      wrong,
      failedIds
    });
    setScreen('result');
  };

  // Retry the same questions (reshuffled)
  const handleRetry = () => {
    const reshuffled = [...activeQuestions].sort(() => 0.5 - Math.random());
    setActiveQuestions(reshuffled);
    setScreen('practice');
  };

  // Immediate mistake review of the failed questions from this session
  const handleReviewMistakes = (mistakeQuestions: Question[]) => {
    setActiveQuestions(mistakeQuestions);
    setIsReviewMode(true);
    setScreen('practice');
  };

  const handleGoHome = () => {
    setScreen('home');
  };

  return (
    <main className="app-container">
      {screen === 'home' && (
        <HomeScreen
          stats={stats}
          onClearStats={clearStats}
          questions={questions}
          onStartSession={handleStartSession}
          dragAndDropEnabled={dragAndDropEnabled}
          setDragAndDropEnabled={setDragAndDropEnabled}
        />
      )}

      {screen === 'practice' && (
        <PracticeScreen
          questions={activeQuestions}
          limitSeconds={timerLimit}
          onRecordResult={recordResult}
          onFinish={handleFinishSession}
          onGoHome={handleGoHome}
          isReviewMode={isReviewMode}
          onRemoveFromReview={removeReview}
          isMockExamMode={isMockExamMode}
          dragAndDropEnabled={dragAndDropEnabled}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          total={sessionSummary.total}
          correct={sessionSummary.correct}
          wrong={sessionSummary.wrong}
          failedIds={sessionSummary.failedIds}
          questions={activeQuestions}
          onRetry={handleRetry}
          onGoHome={handleGoHome}
          onReviewMistakes={handleReviewMistakes}
        />
      )}
    </main>
  );
}
