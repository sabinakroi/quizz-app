import { Input, Radio } from "antd";
import React, { FunctionComponent } from "react";
import { Answer, Question } from "../types/types";
import {
  AddAnswersDiv,
  AddButton,
  ConfirmButton,
  H1,
  StyledDiv,
} from "./styles";

interface AddQuestionsProps {
  questionsList: Question[];
  setQuestionsList: React.Dispatch<React.SetStateAction<Question[]>>;
}

export const AddQuestions: FunctionComponent<AddQuestionsProps> = ({
  setQuestionsList,
}) => {
  const [question, setQuestion] = React.useState<string>("");

  const [answerItems, setAnswersItems] = React.useState<Answer[]>([]);

  const [answerToAdd, setAnswersToAdd] = React.useState("");

  const handleConfirmClick = () => {
    if (!isAnyAnswerCorrect) {
      return;
    }

    setQuestionsList((previousQuestionsList) => [
      ...previousQuestionsList,
      { questionText: question, answerOptions: answerItems },
    ]);

    answerItems.some((ai) => ai.isCorrect === true);
    setAnswersToAdd("");
    setQuestion("");
    setAnswersItems([]);
  };
  const isAnyAnswerCorrect = answerItems.some((ai) => ai.isCorrect === true);

  const handleAnswersToAddClick = () => {
    if (!answerToAdd) {
      return;
    }
    setAnswersItems((previousAnswerItems) => [
      ...previousAnswerItems,
      { answerText: answerToAdd, isCorrect: false },
    ]);
    setAnswersToAdd("");
  };

  const handleAnswerChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setAnswersToAdd(e.target.value);
  };

  const handleQuestionChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setQuestion(e.target.value);
  };

  const handleAnswersKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.keyCode === 13) {
      handleAnswersToAddClick();
    }
  };

  const handleCorrectAnswerChange: React.ChangeEventHandler<HTMLInputElement> =
    (e) => {
      setAnswersItems((previousAnswerItems) => {
        const newArr = previousAnswerItems.map((ai) =>
          ai.answerText === e.target.value
            ? { ...ai, isCorrect: true }
            : { ...ai, isCorrect: false }
        );
        return newArr;
      });
    };

  return (
    <div>
      <H1>
        Fill in the template in order to add extra questions to the quizz!
      </H1>

      <div>
        <StyledDiv>
          <H1>Question </H1>
          <Input
            placeholder="Type here"
            onChange={handleQuestionChange}
            type="text"
            value={question}
          />
        </StyledDiv>
        <br />
        <div>
          <AddAnswersDiv>
            <H1>Add your answer alternatives below</H1>
          </AddAnswersDiv>
          <br />
          <Input
            placeholder="Type here"
            type="text"
            onChange={handleAnswerChange}
            value={answerToAdd}
            onKeyDown={handleAnswersKeyDown}
            disabled={!question}
          />
          <AddButton onClick={handleAnswersToAddClick} disabled={!answerToAdd}>
            Add
          </AddButton>
          <div onChange={handleCorrectAnswerChange}>
            {answerItems.map((item) => (
              <div key={item.answerText}>
                
                <Radio type="radio" value={item.answerText} name="answers"/>
                {item.answerText}
              </div>
            ))}
          </div>
          <div>
            <ConfirmButton
              onClick={handleConfirmClick}
              disabled={answerItems.length < 2 || !isAnyAnswerCorrect}
            >
              Confirm
            </ConfirmButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
