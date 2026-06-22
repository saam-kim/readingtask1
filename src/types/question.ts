export interface Question {
  id: string;
  level: 1 | 2 | 3 | 4 | 5;
  context: string;
  sentenceTemplate: string; // e.g. "The _____ _____ _____ _____ fantastic."
  chunks: string[];          // List of chunks (which will be shuffled in the UI)
  answer: string[];          // The exact sequence of chunks that form the correct answer
  explanation?: string;      // Korean explanation and core grammar point
}
