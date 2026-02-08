
export enum AnswerType {
  SHORT = 'Short Answer',
  LONG = 'Long Answer',
  BULLETS = 'Bullet-point Notes',
  SIMPLE = 'Simple Explanation (ELI12)',
  EXAM = 'Exam-ready Answer'
}

export interface FAQItem {
  question: string;
  answer: string;
}
