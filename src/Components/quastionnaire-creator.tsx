import React, { ChangeEventHandler, useState } from "react";
import { v4 } from "uuid";
import { Question, Questionnaire } from "../Types/types";
import AddQuestions from "./add-questions";

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
      <div>Add questions to the quizz</div>
      <div />
      <label>Title: </label>
      <input value={title} onChange={handleTitleChange} />
      <AddQuestions questionsList={questions} setQuestionsList={setQuestions} />
      <button onClick={handleAddQuestionnaireConfirm}>Add questionnaire</button>
    </div>
  );
};

export default QuestionnaireCreator;
