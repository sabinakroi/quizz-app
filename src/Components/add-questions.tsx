import React, { FunctionComponent } from "react";
import { Answer, Question } from "../Types/types";
import { H1, Label, StyledDiv } from "./styles";

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
          <label>Question </label>
          <input onChange={handleQuestionChange} type="text" value={question} />
        </StyledDiv>
        <div>
          <Label>Add you answer alternatives below</Label>
          <input
            type="text"
            onChange={handleAnswerChange}
            value={answerToAdd}
            onKeyDown={handleAnswersKeyDown}
          />
          <button onClick={handleAnswersToAddClick} disabled={!answerToAdd}>
            Add
          </button>
          <div onChange={handleCorrectAnswerChange}>
            {answerItems.map((item) => (
              <div key={item.answerText}>
                <input type="radio" value={item.answerText} name="answers" />
                {item.answerText}
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleConfirmClick}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
