import { Button, Input } from "antd";
import React, { ChangeEventHandler, useState } from "react";
import { v4 } from "uuid";
import { Question, Questionnaire } from "../types/types";
import AddQuestions from "./add-questions";
import { H1 } from "./styles";

export const QuestionnaireCreator: React.FunctionComponent<{
  onConfirmCreateQuestionnaire: (quesionnaire: Questionnaire) => void;
}> = ({ onConfirmCreateQuestionnaire }) => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleAddQuestionnaireConfirm = () => {
    const newQuestionnaire = {
      id: v4(),
      title,
      questions,
    };
    onConfirmCreateQuestionnaire(newQuestionnaire);
    setQuestions([]);
    setTitle("");
  };

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <H1>Quetionnaire title </H1>
      <br />
      <Input
        placeholder="Type here"
        value={title}
        onChange={handleTitleChange}
      />
      <AddQuestions questionsList={questions} setQuestionsList={setQuestions} />
      <Button
        type="primary"
        onClick={handleAddQuestionnaireConfirm}
        disabled={questions.length < 2}
      >
        Add questionnaire
      </Button>
    </div>
  );
};

export default QuestionnaireCreator;
