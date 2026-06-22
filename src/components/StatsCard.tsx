import React from 'react';
import type { AppStats } from '../utils/storage';

interface StatsCardProps {
  stats: AppStats;
  onClear: () => void;
}

export const StatsCard: React.FC<StatsCardProps> = ({ stats, onClear }) => {
  const overallAccuracy = stats.totalSolved > 0 
    ? Math.round((stats.totalCorrect / stats.totalSolved) * 100) 
    : 0;

  const getLevelAccuracy = (level: number) => {
    const solved = stats.solvedByLevel[level] || 0;
    const correct = stats.correctByLevel[level] || 0;
    return solved > 0 ? Math.round((correct / solved) * 100) : 0;
  };

  const hasMistakes = stats.reviewList.length > 0;

  const handleResetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('정말 모든 학습 기록을 초기화하시겠습니까?')) {
      onClear();
    }
  };

  // Render SVG Trend Chart
  const renderTrendChart = () => {
    const history = stats.history || [];
    
    if (history.length < 2) {
      return (
        <div className="chart-empty-state">
          📊 풀이 이력이 쌓이면 정답률 트렌드 차트가 표시됩니다. (최소 2회 필요)
        </div>
      );
    }

    const svgWidth = 500;
    const svgHeight = 160;
    const paddingLeft = 40;
    const paddingRight = 20;
    const paddingTop = 25;
    const paddingBottom = 30;

    const chartWidth = svgWidth - paddingLeft - paddingRight;
    const chartHeight = svgHeight - paddingTop - paddingBottom;

    // Map history points to coordinates
    const points = history.map((entry, index) => {
      const x = paddingLeft + (index * chartWidth) / (history.length - 1);
      const y = svgHeight - paddingBottom - (entry.accuracy * chartHeight) / 100;
      return { x, y, ...entry };
    });

    // Construct path line
    const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    return (
      <div className="chart-container">
        <h4>Accuracy Trend (Last {history.length} Sessions)</h4>
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} width="100%" height="auto" className="trend-svg">
          {/* Grid lines (0%, 50%, 100%) */}
          {[0, 50, 100].map((level) => {
            const y = svgHeight - paddingBottom - (level * chartHeight) / 100;
            return (
              <g key={level}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={svgWidth - paddingRight}
                  y2={y}
                  stroke="#e2e8f0"
                  strokeDasharray="4 4"
                />
                <text
                  x={paddingLeft - 8}
                  y={y + 4}
                  fill="#94a3b8"
                  fontSize="10"
                  fontWeight="600"
                  textAnchor="end"
                >
                  {level}%
                </text>
              </g>
            );
          })}

          {/* Connection line */}
          <path
            d={linePath}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Value circles and text */}
          {points.map((p, index) => (
            <g key={index} className="chart-point-group">
              {/* Dot */}
              <circle
                cx={p.x}
                cy={p.y}
                r="5"
                fill="var(--color-primary)"
                stroke="white"
                strokeWidth="2"
              />
              {/* Accuracy label on top */}
              <text
                x={p.x}
                y={p.y - 10}
                fill="var(--color-primary)"
                fontSize="11"
                fontWeight="700"
                textAnchor="middle"
              >
                {p.accuracy}%
              </text>
              {/* Date label at bottom */}
              <text
                x={p.x}
                y={svgHeight - 10}
                fill="#4b5563"
                fontSize="11"
                fontWeight="500"
                textAnchor="middle"
              >
                {p.date}
              </text>
            </g>
          ))}
        </svg>
      </div>
    );
  };

  return (
    <div className="stats-card">
      <div className="stats-header">
        <h3>Learning Statistics</h3>
        {stats.totalSolved > 0 && (
          <button className="btn-reset-stats" onClick={handleResetClick}>
            Reset Stats
          </button>
        )}
      </div>

      <div className="stats-grid">
        <div className="stats-item">
          <span className="stats-label">Total Solved</span>
          <span className="stats-value">{stats.totalSolved}</span>
        </div>
        <div className="stats-item">
          <span className="stats-label">Accuracy</span>
          <span className="stats-value accuracy-highlight">{overallAccuracy}%</span>
        </div>
        <div className="stats-item">
          <span className="stats-label">Correct</span>
          <span className="stats-value text-success">{stats.totalCorrect}</span>
        </div>
        <div className="stats-item">
          <span className="stats-label">Review Mistakes</span>
          <span className={`stats-value ${hasMistakes ? 'text-warning' : ''}`}>
            {stats.reviewList.length}
          </span>
        </div>
      </div>

      {/* SVG learning curve trend chart */}
      {renderTrendChart()}

      <div className="level-breakdown">
        <h4>Accuracy by Difficulty</h4>
        <div className="levels-list">
          {[1, 2, 3, 4, 5].map((lvl) => {
            const solved = stats.solvedByLevel[lvl] || 0;
            const accuracy = getLevelAccuracy(lvl);
            return (
              <div key={lvl} className="level-stat-row">
                <span className="level-tag">Level {lvl}</span>
                <span className="level-solved">{solved} solved</span>
                <span className="level-bar-container">
                  <span className="level-bar-fill" style={{ width: `${accuracy}%` }} />
                </span>
                <span className="level-accuracy">{accuracy}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {stats.lastActiveDate && (
        <div className="last-active">
          Last Practice: {stats.lastActiveDate}
        </div>
      )}
    </div>
  );
};
