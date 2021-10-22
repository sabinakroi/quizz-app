import React, { useEffect, useState } from "react";
import { useAnswerContext } from "../contexts/answer-context";
import { Questionnaire } from "../types/types";
import { Scores } from "./scores";
import {
  Answers,
  ConfirmButton,
  H1,
  NextButton,
  PreviousButton,
  Wrapper,
} from "./styles";

export const QuestionnaireAnswering: React.FunctionComponent<{
  questionnaire: Questionnaire;
}> = ({ questionnaire }) => {
  const questionList = questionnaire.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { setQuestionnairesAnswers } = useAnswerContext();

  const [currentSelectedAnswer, setCurrentSelectedAnswer] = React.useState<
    string | undefined
  >();

  const [savedAnswers, setSavedAnswers] = useState<string[]>([]);

  const quizzIsCompleted = savedAnswers.length === questionList.length;

  useEffect(() => {
    if (savedAnswers.length === questionList.length) {
      setQuestionnairesAnswers((prev) => [
        ...prev,
        { id: questionnaire.id, answers: savedAnswers },
      ]);
    }
  }, [
    questionList.length,
    questionnaire.id,
    savedAnswers,
    setQuestionnairesAnswers,
  ]);

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
            Question {currentQuestion + 1} out of {questionList.length}
          </H1>
          <div>
            After reading the questions carefully please confirm your answers
            and then click next.
          </div>

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
          <div>
            <PreviousButton
              onClick={handlePreviousClick}
              disabled={questionList[currentQuestion] === questionList[0]}
            >
              Previous
            </PreviousButton>
            <NextButton
              onClick={handleNextClick}
              disabled={
                currentQuestion > questionList.length - 1 ||
                savedAnswers.length <= currentQuestion
              }
            >
              Next
            </NextButton>
            <ConfirmButton
              onClick={handleConfirmClick}
              disabled={!currentSelectedAnswer || isQuestionAnswered}
            >
              Confirm
            </ConfirmButton>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
