import React from "react";
import { Question } from "../types/types";
import { Header } from "./styles";

const findIfCorrect = (answer: string, question: Question) => {
  const selectedAnswerOption = question.answerOptions.find(
    (ao) => ao.answerText === answer
  )!;
  return selectedAnswerOption.isCorrect;
};

export const Scores: React.FC<{
  savedAnswers: string[];
  questions: Question[];
}> = ({ savedAnswers: selectedAnswers, questions }) => {
  const answersAndCorrectness = selectedAnswers.map((selectedAnswer, index) => {
    return {
      answer: selectedAnswer,
      isCorrect: findIfCorrect(selectedAnswer, questions[index]),
    };
  });

  const score = answersAndCorrectness.reduce((acc, answerAndCorrectness) => {
    if (answerAndCorrectness.isCorrect) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <body>
      <Header>Your answers are:</Header>
      <div>
        <br />
        {answersAndCorrectness.map((ac) => (
          <div key={ac.answer}>
            {ac.answer} / {ac.isCorrect ? "Correct" : "Not Correct"}
          </div>
        ))}
        <br />
        <div>
          You answered correctly {score} questions out of {questions.length}
        </div>
      </div>
    </body>
  );
};
