import React from 'react';

interface ProgressBarProps {
  current: number; // 0-indexed current question index
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span className="progress-text">Question {current + 1} of {total}</span>
        <span className="progress-percentage">{Math.round(percentage)}% Completed</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};
