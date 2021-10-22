import { Button } from "antd";
import React, { FunctionComponent } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { QuestionnaireAnswering } from "./questionnaire-answering";

interface SavedAnswersProps {
  questionnairesAnswers: {
    id: string;
    answers: string[];
  }[];
  setQuestionnairesAnswers: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        answers: string[];
      }[]
    >
  >;
}

const SavedAnswers: FunctionComponent<SavedAnswersProps> = ({
  questionnairesAnswers,
  setQuestionnairesAnswers,
}) => {
  return (
    <div>
      <div>
        <Link to="/savedAnswers">
          <Button type="link"> Saved answers</Button>
        </Link>
      </div>
      <Switch>
        <Route path="/savedAnswers" component={QuestionnaireAnswering}>
          {" "}
        </Route>
      </Switch>
    </div>
  );
};

export default SavedAnswers;
