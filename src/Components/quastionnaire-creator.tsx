import { Input } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { ChangeEventHandler, useState } from "react";
import { v4 } from "uuid";
import { Question, Questionnaire } from "../types/types";
import AddQuestions from "./add-questions";
import { AddQuestionnaireButton, AddQuestionsDiv as H1 } from "./styles";

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
      <div />
      <H1>Add questions to the quizz</H1>
      <div />
      <Header>Quetionnaire title: </Header>
      <br />
      <Input
        placeholder="Type here"
        value={title}
        onChange={handleTitleChange}
      />
      <AddQuestions questionsList={questions} setQuestionsList={setQuestions} />
      <AddQuestionnaireButton
        onClick={handleAddQuestionnaireConfirm}
        disabled={questions.length < 2}
      >
        Add questionnaire
      </AddQuestionnaireButton>
    </div>
  );
};

export default QuestionnaireCreator;
