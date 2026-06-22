import React, { useState } from 'react';
import type { AppStats } from '../utils/storage';
import { StatsCard } from './StatsCard';
import type { Question } from '../types/question';

interface HomeScreenProps {
  stats: AppStats;
  onClearStats: () => void;
  questions: Question[];
  onStartSession: (
    selectedQuestions: Question[],
    timerLimit: number,
    isReviewMode: boolean,
    isMockExamMode: boolean
  ) => void;
  dragAndDropEnabled: boolean;
  setDragAndDropEnabled: (val: boolean) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  stats,
  onClearStats,
  questions,
  onStartSession,
  dragAndDropEnabled,
  setDragAndDropEnabled
}) => {
  const [level, setLevel] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [timerLimit, setTimerLimit] = useState<number>(0); // 0 = Off
  const [isMockExamMode, setIsMockExamMode] = useState<boolean>(false);

  const countOptions = [5, 10, 15, 20, 25, 30, 50];
  const timerOptions = [
    { label: 'Off', value: 0 },
    { label: '30s', value: 30 },
    { label: '45s', value: 45 },
    { label: '60s', value: 60 }
  ];

  // Filter questions for standard practice
  const filteredQuestions = questions.filter(q => q.level === level);
  const isCountInsufficient = filteredQuestions.length < questionCount;

  // Handle standard start
  const handleStartPractice = () => {
    if (isCountInsufficient) return;
    
    // Shuffle the filtered questions
    const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, questionCount);
    
    onStartSession(selected, isMockExamMode ? 1200 : timerLimit, false, isMockExamMode);
  };

  // Handle review mistakes start
  const handleStartReview = () => {
    if (stats.reviewList.length === 0) return;
    
    // Retrieve all mistake questions based on reviewList IDs
    const reviewQuestions = questions.filter(q => stats.reviewList.includes(q.id));
    
    // Shuffle the review questions
    const shuffled = [...reviewQuestions].sort(() => 0.5 - Math.random());
    
    onStartSession(shuffled, isMockExamMode ? 1200 : timerLimit, true, isMockExamMode);
  };

  return (
    <div className="home-screen fade-in">
      <div className="app-header">
        <h1 className="app-title">TOEFL Writing Task 1</h1>
        <h2 className="app-subtitle">Build a Sentence Touch Practice</h2>
        <p className="app-description">
          Tap the chunks to build the correct response. Specially optimized for iPad touch controls.
        </p>
      </div>

      <div className="setup-card">
        <h3>Practice Setup</h3>
        
        {/* Difficulty Selection */}
        <div className="setup-section">
          <label className="section-label">Select Difficulty Level</label>
          <div className="level-selector-grid">
            {([1, 2, 3, 4, 5] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                className={`level-btn level-${lvl} ${level === lvl ? 'active' : ''}`}
                onClick={() => setLevel(lvl)}
              >
                <span className="level-number">{lvl}</span>
                <span className="level-name">
                  {lvl === 1 && 'Easy'}
                  {lvl === 2 && 'Lower-Mid'}
                  {lvl === 3 && 'Medium'}
                  {lvl === 4 && 'Actual'}
                  {lvl === 5 && 'Hard'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Question Count Selection */}
        <div className="setup-section">
          <label className="section-label">Number of Questions</label>
          <div className="pill-selector">
            {countOptions.map((count) => (
              <button
                key={count}
                type="button"
                className={`pill-btn ${questionCount === count ? 'active' : ''}`}
                onClick={() => setQuestionCount(count)}
              >
                {count} Qs
              </button>
            ))}
          </div>
        </div>

        {/* App Settings Toggles */}
        <div className="setup-section settings-section">
          <label className="section-label">Interactive Options</label>
          <div className="settings-grid">
            <label className="toggle-switch-label">
              <input
                type="checkbox"
                checked={dragAndDropEnabled}
                onChange={(e) => setDragAndDropEnabled(e.target.checked)}
              />
              <span className="toggle-text">
                <strong>Drag & Drop Mode</strong>
                <span className="toggle-subtext">Drag chunks directly into slots</span>
              </span>
            </label>

            <label className="toggle-switch-label">
              <input
                type="checkbox"
                checked={isMockExamMode}
                onChange={(e) => setIsMockExamMode(e.target.checked)}
              />
              <span className="toggle-text">
                <strong>20-Min Mock Exam Mode</strong>
                <span className="toggle-subtext">Use a global 20-minute session timer</span>
              </span>
            </label>
          </div>
        </div>

        {/* Question Timer Selection (Disabled in Mock Exam Mode) */}
        <div className="setup-section" style={{ opacity: isMockExamMode ? 0.5 : 1, pointerEvents: isMockExamMode ? 'none' : 'auto' }}>
          <label className="section-label">
            Time Limit per Question {isMockExamMode && '(Locked to 20-Min global timer)'}
          </label>
          <div className="pill-selector">
            {timerOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={`pill-btn ${timerLimit === opt.value ? 'active' : ''}`}
                onClick={() => setTimerLimit(opt.value)}
                disabled={isMockExamMode}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Error Warning if there are not enough questions */}
        {isCountInsufficient && (
          <div className="error-message animate-shake">
            ⚠️ 선택한 난이도의 문제가 부족합니다. 문제 수를 줄이거나 문제 데이터를 추가해 주세요.
            <br />
            <small>(Available questions in Level {level}: {filteredQuestions.length})</small>
          </div>
        )}

        {/* Start Buttons */}
        <div className="action-buttons-group">
          <button
            type="button"
            className="btn-primary btn-large touch-feedback"
            onClick={handleStartPractice}
            disabled={isCountInsufficient}
          >
            Start Practice
          </button>
          
          <button
            type="button"
            className={`btn-secondary btn-large touch-feedback ${stats.reviewList.length > 0 ? 'pulse-glow' : ''}`}
            onClick={handleStartReview}
            disabled={stats.reviewList.length === 0}
          >
            Review Mistakes ({stats.reviewList.length})
          </button>
        </div>
      </div>

      {/* Analytics stats dashboard */}
      <StatsCard stats={stats} onClear={onClearStats} />
    </div>
  );
};
