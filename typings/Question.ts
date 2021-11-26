export type Answer = {
  id: string;
  text: string;
  next: string;
}

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
}

export type QuizAnswers = {
  question: string;
  answer: string;
}[];