import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Questionnaire } from "../Types/types";
import { Ul } from "./styles";

interface NavigationProps {
  questionnaires: Questionnaire[];
}

const QuestionnaireSelector: FunctionComponent<NavigationProps> = ({
  questionnaires,
}) => {
  const links = questionnaires.map((questionnaire) => (
    <li key={questionnaire.id}>
      <Link to={`/questionnaire/${questionnaire.id}`}>
        {questionnaire.title}
      </Link>
    </li>
  ));
  return (
    <nav>
      <Ul>{links}</Ul>
    </nav>
  );
};

export default QuestionnaireSelector;
