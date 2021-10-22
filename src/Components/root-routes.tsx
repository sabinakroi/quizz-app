import { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { Questionnaire } from "../types/types";
import { QuestionnaireAnswering } from "./questionnaire-answering";

const QuestionnaireComponent: FunctionComponent<{
  questionnaires: Questionnaire[];
  id: string;
}> = ({ questionnaires, id }) => {
  const selectedQuestionnaire = questionnaires.find((q) => q.id === id)!;
  return (
    <div>
      <QuestionnaireAnswering questionnaire={selectedQuestionnaire} />
    </div>
  );
};

const RootRoutes: FunctionComponent<{ questionnaires: Questionnaire[] }> = ({
  questionnaires,
}) => {
  const routes = questionnaires.map((q) => (
    <Route key={q.id} exact path={`/questionnaire/${q.id}`}>
      <QuestionnaireComponent id={q.id} questionnaires={questionnaires} />
    </Route>
  ));
  return <Switch>{routes}</Switch>;
};
export default RootRoutes;
