import React, { useState } from "react";
import { Scores } from "../Components/scores";
import { Question } from "../Types/types";
import { Answers, ButtonWrapper, H1, Wrapper } from "./styles";

export const MainComponent: React.FunctionComponent<{
  questionList: Question[];
}> = ({ questionList }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [currentSelectedAnswer, setCurrentSelectedAnswer] = React.useState<
    string | undefined
  >();

  const [savedAnswers, setSavedAnswers] = useState<string[]>([]);

  const quizzIsCompleted = savedAnswers.length === questionList.length;

  const handleConfirmClick = () => {
    if (currentSelectedAnswer) {
      setSavedAnswers([...savedAnswers, currentSelectedAnswer]);
    }
  };

  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionList.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handleChange = (e: any) => {
    setCurrentSelectedAnswer(e.target.value);
  };

  const handlePreviousClick = () => {
    const previusQuestion = currentQuestion - 1;
    setCurrentQuestion(previusQuestion);
  };

  if (quizzIsCompleted) {
    return <Scores savedAnswers={savedAnswers} questions={questionList} />;
  }

  const isQuestionAnswered = savedAnswers.length >= currentQuestion + 1;

  return (
    <>
      <Wrapper>
        <div>
          <H1>
            Question {currentQuestion + 1} - {questionList.length} <br />
            After reading the questions carefully please confirm your answers
            and then click next.
          </H1>

          <div>{questionList[currentQuestion].questionText}</div>
        </div>
        <Answers>Your answer {savedAnswers}</Answers>
        <div onChange={handleChange}>
          {questionList[currentQuestion].answerOptions.map((answerOption) => (
            <React.Fragment key={answerOption.answerText}>
              <input
                type="radio"
                value={answerOption.answerText}
                name={"quizz"}
                disabled={isQuestionAnswered}
                checked={
                  currentSelectedAnswer === answerOption.answerText ||
                  savedAnswers[currentQuestion] === answerOption.answerText
                }
              />
              {answerOption.answerText}
            </React.Fragment>
          ))}
          <ButtonWrapper>
            <button
              onClick={handlePreviousClick}
              disabled={questionList[currentQuestion] === questionList[0]}
            >
              Previous
            </button>
            <button
              onClick={handleNextClick}
              disabled={
                currentQuestion > questionList.length - 1 ||
                savedAnswers.length <= currentQuestion
              }
            >
              Next
            </button>
            <button
              onClick={handleConfirmClick}
              disabled={!currentSelectedAnswer || isQuestionAnswered}
            >
              Confirm
            </button>
          </ButtonWrapper>
        </div>
      </Wrapper>
    </>
  );
};
