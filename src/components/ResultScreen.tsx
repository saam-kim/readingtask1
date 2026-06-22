import React from 'react';
import type { Question } from '../types/question';

interface ResultScreenProps {
  total: number;
  correct: number;
  wrong: number;
  failedIds: string[];
  questions: Question[];
  onRetry: () => void;
  onGoHome: () => void;
  onReviewMistakes: (mistakeQuestions: Question[]) => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  total,
  correct,
  wrong,
  failedIds,
  questions,
  onRetry,
  onGoHome,
  onReviewMistakes
}) => {
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Filter the questions that were failed in this session
  const failedQuestions = questions.filter(q => failedIds.includes(q.id));

  return (
    <div className="result-screen fade-in">
      <div className="result-header">
        <h2>Practice Completed!</h2>
        <p>Here is your performance summary for this session.</p>
      </div>

      {/* Accuracy circular representation */}
      <div className="accuracy-card">
        <div className="radial-progress-container">
          <div className="radial-progress-bg">
            <span className="radial-progress-number">{accuracy}%</span>
            <span className="radial-progress-label">Accuracy</span>
          </div>
        </div>

        <div className="result-summary-grid">
          <div className="summary-stat">
            <span className="summary-label">Total Questions</span>
            <span className="summary-value">{total}</span>
          </div>
          <div className="summary-stat text-success-heavy">
            <span className="summary-label">Correct Answers</span>
            <span className="summary-value">✓ {correct}</span>
          </div>
          <div className="summary-stat text-danger-heavy">
            <span className="summary-label">Incorrect / Skipped</span>
            <span className="summary-value">✗ {wrong}</span>
          </div>
        </div>
      </div>

      {/* Mistake summary details */}
      {failedQuestions.length > 0 && (
        <div className="mistake-list-card">
          <h3>Review Mistakes from This Session</h3>
          <div className="mistake-items">
            {failedQuestions.map((q) => (
              <div key={q.id} className="mistake-item">
                <div className="mistake-item-meta">
                  <span className="level-tag">Level {q.level}</span>
                  <span className="mistake-id">{q.id}</span>
                </div>
                <div className="mistake-context">Context: "{q.context}"</div>
                <div className="mistake-correct-sentence">
                  Correct: <strong>{q.answer.join(' ')}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="result-actions-group">
        <button
          type="button"
          className="btn-primary btn-large touch-feedback"
          onClick={onRetry}
        >
          🔄 Practice Again
        </button>

        {failedQuestions.length > 0 && (
          <button
            type="button"
            className="btn-secondary btn-large pulse-glow touch-feedback"
            onClick={() => onReviewMistakes(failedQuestions)}
          >
            ✏️ Review Session Mistakes ({failedQuestions.length})
          </button>
        )}

        <button
          type="button"
          className="btn-tertiary btn-large touch-feedback"
          onClick={onGoHome}
        >
          🏠 Go to Home
        </button>
      </div>
    </div>
  );
};
