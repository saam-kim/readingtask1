import React from 'react';

interface ChunkButtonProps {
  chunk: string;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
}

export const ChunkButton: React.FC<ChunkButtonProps> = ({
  chunk,
  isSelected,
  onClick,
  disabled = false,
  draggable = false,
  onDragStart
}) => {
  return (
    <button
      className={`chunk-btn ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      disabled={disabled || isSelected}
      type="button"
      aria-pressed={isSelected}
      draggable={draggable && !isSelected}
      onDragStart={onDragStart}
    >
      {chunk}
    </button>
  );
};
