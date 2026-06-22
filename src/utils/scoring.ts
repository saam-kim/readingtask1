export function checkAnswer(selectedChunks: string[], correctChunks: string[]): boolean {
  if (selectedChunks.length !== correctChunks.length) return false;
  return selectedChunks.every((val, index) => val === correctChunks[index]);
}
