import React, { useState } from 'react';

interface AnswerAreaProps {
  sentenceTemplate: string;
  selectedChunks: string[];
  onDeselect: (index: number) => void;
  status: 'typing' | 'correct' | 'incorrect' | 'showing_answer';
  dragAndDropEnabled?: boolean;
  onDropChunk?: (chunkIndex: number, targetSlotIndex: number) => void;
}

export const AnswerArea: React.FC<AnswerAreaProps> = ({
  sentenceTemplate,
  selectedChunks,
  onDeselect,
  status,
  dragAndDropEnabled = false,
  onDropChunk
}) => {
  // Track which slot index is currently being hovered over in a drag operation
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const parts = sentenceTemplate.split('_____');
  const isLocked = status === 'correct' || status === 'showing_answer';

  const handleDragOver = (e: React.DragEvent, index: number) => {
    if (isLocked || !dragAndDropEnabled) return;
    e.preventDefault(); // Required to allow dropping
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    if (isLocked || !dragAndDropEnabled) return;
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    if (isLocked || !dragAndDropEnabled || !onDropChunk) return;
    e.preventDefault();
    setDragOverIndex(null);
    
    const chunkIndexStr = e.dataTransfer.getData('text/plain');
    if (chunkIndexStr) {
      const chunkIndex = parseInt(chunkIndexStr, 10);
      if (!isNaN(chunkIndex)) {
        onDropChunk(chunkIndex, targetIndex);
      }
    }
  };

  return (
    <div className={`answer-area-container ${status}`}>
      <div className="answer-sentence">
        {parts.map((part, index) => {
          const isLast = index === parts.length - 1;
          const chunkVal = selectedChunks[index];
          const isDragOver = dragOverIndex === index;

          return (
            <React.Fragment key={index}>
              {/* Static text segment */}
              {part && <span className="template-text">{part}</span>}
              
              {/* Blank slot / Slotted chunk */}
              {!isLast && (
                chunkVal ? (
                  <button
                    type="button"
                    className={`filled-chunk-slot ${isLocked ? 'locked' : ''} active-glow`}
                    onClick={() => !isLocked && onDeselect(index)}
                    disabled={isLocked}
                    title="Tap to remove"
                  >
                    {chunkVal}
                  </button>
                ) : (
                  <span
                    className={`empty-chunk-slot animate-pulse ${isDragOver ? 'drag-over' : ''}`}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    {index + 1}
                  </span>
                )
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
