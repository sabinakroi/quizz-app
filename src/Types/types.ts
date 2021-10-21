export type Question = {
  questionText: string;
  answerOptions: Answer[];
};

export type Answer = {
  answerText: string;
  isCorrect: boolean;
};

export type Questionnaire = {
  id: string;
  title: string;
  questions: Question[];
};
