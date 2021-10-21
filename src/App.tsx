import React from "react";
import { BrowserRouter } from "react-router-dom";
import QuestionnaireCreator from "./Components/quastionnaire-creator";
import QuestionnaireSelector from "./Components/questionnaire-selector";
import RootRoutes from "./Components/root-routes";
import { Div, Divv, Header } from "./Components/styles";
import { Questionnaire } from "./Types/types";

const App = () => {
  const [questionnaires, setQuestionnaires] = React.useState<Questionnaire[]>(
    []
  );

  const handleQuestionnaireAdd = (questionnaire: Questionnaire) => {
    setQuestionnaires((prev) => [...prev, questionnaire]);
  };

  return (
    <BrowserRouter>
      <Div>
        <Header>Quiz</Header>
        {questionnaires.length > 0 && (
          <div>
            <div>Follow the link to required questionnaire: </div>
            <QuestionnaireSelector questionnaires={questionnaires} />
          </div>
        )}
        <div>
          {/* <QuestionnaireAnswers questionList={questionList} /> */}
          <div>
            <QuestionnaireCreator
              onConfirmCreateQuestionnaire={handleQuestionnaireAdd}
            />
          </div>
        </div>
        <RootRoutes questionnaires={questionnaires} />
        <Divv>Thank you!</Divv>
      </Div>
    </BrowserRouter>
  );
};

export default App;
