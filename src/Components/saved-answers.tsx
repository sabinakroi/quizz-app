import { Button, Collapse, Typography } from "antd";
import React, { FunctionComponent, useState } from "react";
import { Questionnaire, QuestionnaireResult } from "../types/types";

interface SavedAnswersProps {
  questionnairesAnswers: QuestionnaireResult[];
  questionnaires: Questionnaire[];
}

const QuestionnaireAnswers: FunctionComponent<{
  questionnaire: Questionnaire;
  answers: string[];
}> = ({ questionnaire, answers }) => {
  const answerDisplays = answers.map((answer, i) => (
    <div key={answer}>
      <div>
        <Typography.Text underline strong>
          {questionnaire.questions[i].questionText}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text>{answer}</Typography.Text>
      </div>
    </div>
  ));
  return <div>{answerDisplays}</div>;
};

const SavedAnswers: FunctionComponent<SavedAnswersProps> = ({
  questionnairesAnswers,
  questionnaires,
}) => {
  const [shouldShowAnswers, setShouldShowAnswers] = useState(false);
  const handleClick = () => {
    setShouldShowAnswers((prev) => !prev);
  };
  const answeredQuestionnairesList = questionnairesAnswers.map((result) => {
    const questionnaire = questionnaires.find((q) => q.id === result.id)!;
    return (
      <Collapse.Panel header={questionnaire.title} key={result.id}>
        <QuestionnaireAnswers
          questionnaire={questionnaire}
          answers={result.answers}
        />
      </Collapse.Panel>
    );
  });

  return (
    <div>
      <div>
        <Button onClick={handleClick}> Saved answers 🔐</Button>
      </div>
      {shouldShowAnswers && (
        <Collapse accordion>{answeredQuestionnairesList}</Collapse>
      )}
    </div>
  );
};

export default SavedAnswers;
