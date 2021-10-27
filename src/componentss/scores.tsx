import React from "react";
import { Question } from "../types/types";
import { H1 } from "./styles";

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
    <div>
      <H1>Your answers are</H1>
      <br />
      {answersAndCorrectness.map((ac) => (
        <div key={ac.answer}>
          {ac.answer} {ac.isCorrect ? " ✔️ Correct" : " ✖️ Wrong"}
        </div>
      ))}
      <br />
      <div>
        <H1>
          You answered correctly {score} questions out of {questions.length}
        </H1>
      </div>
    </div>
  );
};
