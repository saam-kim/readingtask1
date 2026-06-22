import React, { useState, useEffect } from 'react';
import type { Question } from '../types/question';
import { usePracticeSession } from '../hooks/usePracticeSession';
import { ProgressBar } from './ProgressBar';
import { AnswerArea } from './AnswerArea';
import { ChunkButton } from './ChunkButton';

interface PracticeScreenProps {
  questions: Question[];
  limitSeconds: number; // 0 for off
  onRecordResult: (level: number, id: string, isCorrect: boolean) => void;
  onFinish: (correctCount: number, wrongCount: number, incorrectIds: string[]) => void;
  onGoHome: () => void;
  isReviewMode: boolean;
  onRemoveFromReview: (id: string) => void;
  isMockExamMode?: boolean; // Mock exam session trigger
  dragAndDropEnabled?: boolean; // Drag and drop feature switch
}

export const PracticeScreen: React.FC<PracticeScreenProps> = ({
  questions,
  limitSeconds,
  onRecordResult,
  onFinish,
  onGoHome,
  isReviewMode,
  onRemoveFromReview,
  isMockExamMode = false,
  dragAndDropEnabled = false
}) => {
  // Track correct/wrong status of each question in this session
  const [sessionResults, setSessionResults] = useState<{ [qId: string]: boolean }>({});
  
  // Track whether to remove current question from review list
  const [shouldRemoveFromReview, setShouldRemoveFromReview] = useState(true);

  // Initialize practice session state machine
  const {
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
    checkAnswer: triggerCheckAnswer,
    tryAgain,
    showAnswer: triggerShowAnswer,
    nextQuestion,
    totalQuestions
  } = usePracticeSession({
    questions,
    limitSeconds,
    onRecordResult,
    isMockExamMode
  });

  // Reset the review removal state for each question
  useEffect(() => {
    setShouldRemoveFromReview(true);
  }, [currentIndex]);

  // TTS Speech Player using native browser SpeechSynthesis
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop current speech
      
      // Clean speech format (remove prefixes for dialogue roles)
      const clean = text
        .replace(/_____/g, 'blank')
        .replace(/Student A:/gi, '')
        .replace(/Student B:/gi, '')
        .replace(/Professor:/gi, '')
        .replace(/Student:/gi, '');
        
      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = 'en-US';
      
      // Optionally pick a natural sounding voice
      const voices = window.speechSynthesis.getVoices();
      const usVoice = voices.find(v => v.lang.startsWith('en-US') && v.name.includes('Google'));
      if (usVoice) {
        utterance.voice = usVoice;
      } else {
        const enVoice = voices.find(v => v.lang.startsWith('en'));
        if (enVoice) utterance.voice = enVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert('이 브라우저는 음성 합성(TTS)을 지원하지 않습니다.');
    }
  };

  // Compile session stats and finish
  const handleFinishSession = () => {
    let correct = 0;
    let wrong = 0;
    const failedIds: string[] = [];

    questions.forEach((q) => {
      const wasCorrect = sessionResults[q.id];
      if (wasCorrect === true) {
        correct++;
      } else {
        wrong++;
        failedIds.push(q.id);
      }
    });

    onFinish(correct, wrong, failedIds);
  };

  // Global Mock Exam timer auto-expiration
  useEffect(() => {
    if (isMockExamMode && timeLeft === 0) {
      handleFinishSession();
    }
  }, [timeLeft, isMockExamMode]);

  if (!currentQuestion) {
    return (
      <div className="error-container">
        <h3>Error: No questions found for this session.</h3>
        <button className="btn-primary" onClick={onGoHome}>Go Home</button>
      </div>
    );
  }

  // Handle Check Answer click
  const handleCheck = () => {
    triggerCheckAnswer();
  };

  // Listen for correctness status changes to record session results
  useEffect(() => {
    if (status === 'correct') {
      setSessionResults(prev => ({ ...prev, [currentQuestion.id]: true }));
    } else if (status === 'showing_answer') {
      setSessionResults(prev => ({ ...prev, [currentQuestion.id]: false }));
    }
  }, [status, currentQuestion.id]);

  // Handle Show Answer click
  const handleShowAnswerClick = () => {
    triggerShowAnswer();
  };

  // Handle Next button click
  const handleNext = () => {
    // If in review mode, we got it correct, and the user chose to remove it
    if (isReviewMode && status === 'correct' && shouldRemoveFromReview) {
      onRemoveFromReview(currentQuestion.id);
    }

    if (currentIndex === totalQuestions - 1) {
      handleFinishSession();
    } else {
      nextQuestion();
    }
  };

  // Format timer text
  const getTimerDisplay = () => {
    if (limitSeconds <= 0 && !isMockExamMode) return null;
    
    let timeStr = `${timeLeft}s`;
    let isWarning = timeLeft <= 10;

    if (isMockExamMode) {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timeStr = `Exam: ${minutes}:${seconds.toString().padStart(2, '0')}`;
      isWarning = timeLeft <= 120; // Warn when 2 mins remain
    }

    return (
      <div className={`timer-badge ${isWarning ? 'timer-warning' : ''} ${hasTimedOut ? 'timer-expired' : ''}`}>
        <span className="timer-icon">⏱️</span>
        <span className="timer-seconds">{timeStr}</span>
        {hasTimedOut && <span className="timer-timeout-label">Time's Up!</span>}
      </div>
    );
  };

  return (
    <div className="practice-screen fade-in">
      {/* Session Progress Header */}
      <div className="practice-header">
        <button type="button" className="btn-back-home" onClick={onGoHome} title="Exit Practice">
          ✕ Exit
        </button>
        <div className="practice-meta">
          <span className="level-badge">Level {currentQuestion.level}</span>
          {isReviewMode && <span className="review-badge">Review Mode</span>}
          {isMockExamMode && <span className="exam-mode-badge">Mock Exam</span>}
        </div>
        {getTimerDisplay()}
      </div>

      <ProgressBar current={currentIndex} total={totalQuestions} />

      {/* TOEFL Context Box */}
      <div className="context-card relative-parent">
        <div className="context-header-row">
          <div className="context-label">Context Dialogue / Question</div>
          <button
            type="button"
            className="btn-tts"
            onClick={() => speakText(currentQuestion.context)}
            title="Listen to dialogue"
          >
            🔊 Listen
          </button>
        </div>
        <p className="context-text">{currentQuestion.context}</p>
      </div>

      {/* Answer Slots Area */}
      <div className="answer-section-label">Your Response:</div>
      <AnswerArea
        sentenceTemplate={currentQuestion.sentenceTemplate}
        selectedChunks={selectedChunks}
        onDeselect={deselectChunk}
        status={status}
        dragAndDropEnabled={dragAndDropEnabled}
        onDropChunk={dropChunk}
      />

      {/* Scoring feedback messages */}
      {status === 'correct' && (
        <div className="feedback-message success-message fade-in-up">
          <span className="feedback-icon">✓</span> Correct Answer! Great job.
        </div>
      )}

      {status === 'incorrect' && (
        <div className="feedback-message error-message fade-in-up animate-shake">
          <span className="feedback-icon">✗</span> Incorrect chunk order. Try again or check the correct answer.
        </div>
      )}

      {status === 'showing_answer' && (
        <div className="explanation-card fade-in-up">
          <div className="explanation-header-row">
            <div className="explanation-title">Explanation & Grammar Point</div>
            <button
              type="button"
              className="btn-tts-answer"
              onClick={() => speakText(currentQuestion.answer.join(' '))}
              title="Listen to correct sentence"
            >
              🔊 Play Sentence
            </button>
          </div>
          <p className="explanation-detail">{currentQuestion.explanation}</p>
        </div>
      )}

      {/* Chunk Bank */}
      {status !== 'showing_answer' && status !== 'correct' && (
        <div className="chunk-bank-container">
          <div className="bank-label">
            Chunk Bank {dragAndDropEnabled ? '(Drag and drop or tap to select)' : '(Tap to select)'}
          </div>
          <div className="chunk-bank">
            {shuffledChunks.map((chunk, index) => {
              const isSelected = selectedIndexes.includes(index);
              return (
                <ChunkButton
                  key={`${index}-${chunk}`}
                  chunk={chunk}
                  isSelected={isSelected}
                  onClick={() => selectChunk(index)}
                  draggable={dragAndDropEnabled && status === 'typing'}
                  onDragStart={(e) => {
                    if (dragAndDropEnabled && status === 'typing') {
                      e.dataTransfer.setData('text/plain', index.toString());
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Interactive Controls & Bottom actions */}
      <div className="practice-controls">
        {/* Left side actions (Undo, Clear) */}
        <div className="control-left-group">
          <button
            type="button"
            className="btn-control btn-undo"
            onClick={undo}
            disabled={selectedIndexes.every(idx => idx === null) || status === 'correct' || status === 'showing_answer'}
            title="Undo last tap"
          >
            ↩ Undo
          </button>
          
          <button
            type="button"
            className="btn-control btn-clear"
            onClick={clear}
            disabled={selectedIndexes.every(idx => idx === null) || status === 'correct' || status === 'showing_answer'}
            title="Clear all"
          >
            🗑 Clear
          </button>
        </div>

        {/* Center/Right side primary action buttons */}
        <div className="control-right-group">
          {status === 'typing' && (
            <>
              <button
                type="button"
                className="btn-action btn-show-answer"
                onClick={handleShowAnswerClick}
              >
                Show Answer
              </button>
              
              <button
                type="button"
                className="btn-action btn-check"
                onClick={handleCheck}
                disabled={selectedIndexes.every(idx => idx === null)}
              >
                Check Answer
              </button>
            </>
          )}

          {status === 'incorrect' && (
            <>
              <button
                type="button"
                className="btn-action btn-show-answer"
                onClick={handleShowAnswerClick}
              >
                Show Answer
              </button>
              
              <button
                type="button"
                className="btn-action btn-try-again active-pulse"
                onClick={tryAgain}
              >
                Try Again
              </button>
            </>
          )}

          {(status === 'correct' || status === 'showing_answer') && (
            <div className="next-action-container">
              {/* Optional: Remove from mistakes checkbox when correcting mistakes in Review Mode */}
              {isReviewMode && status === 'correct' && (
                <label className="checkbox-remove-review">
                  <input
                    type="checkbox"
                    checked={shouldRemoveFromReview}
                    onChange={(e) => setShouldRemoveFromReview(e.target.checked)}
                  />
                  <span>오답 목록에서 제외하기</span>
                </label>
              )}
              
              <button
                type="button"
                className="btn-action btn-next active-pulse"
                onClick={handleNext}
              >
                {currentIndex === totalQuestions - 1 ? 'Finish Session' : 'Next Question ➔'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
