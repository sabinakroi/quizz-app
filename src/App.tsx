import React from "react";
import { BrowserRouter } from "react-router-dom";
import QuestionnaireCreator from "./components/quastionnaire-creator";
import QuestionnaireSelector from "./components/questionnaire-selector";
import RootRoutes from "./components/root-routes";
import SavedAnswers from "./components/saved-answers";
import { Div, H1, Header, ThankyouDiv } from "./components/styles";
import { AnswerContext } from "./contexts/answer-context";
import { Questionnaire } from "./types/types";

const App = () => {
  const [questionnaires, setQuestionnaires] = React.useState<Questionnaire[]>(
    []
  );

  const [questionnairesAnswers, setQuestionnairesAnswers] = React.useState<
    { id: string; answers: string[] }[]
  >([]);

  const handleQuestionnaireAdd = (questionnaire: Questionnaire) => {
    setQuestionnaires((prev) => [...prev, questionnaire]);
  };

  return (
    <BrowserRouter>
      <Div>
        <Header>
          Quiz
          <span role="img" aria-label="pen">
            🖍️
          </span>
        </Header>
        {questionnaires.length > 0 && (
          <div>
            <H1>Follow the link to required questionnaire: </H1>
            <QuestionnaireSelector questionnaires={questionnaires} />
          </div>
        )}
        <div>
          {/* <QuestionnaireAnswers questionList={questionList} /> */}
          <div>
            <QuestionnaireCreator
              onConfirmCreateQuestionnaire={handleQuestionnaireAdd}
            />
            <AnswerContext.Provider value={{ setQuestionnairesAnswers }}>
              <RootRoutes questionnaires={questionnaires} />
            </AnswerContext.Provider>
          </div>
        </div>
        <br />
        <ThankyouDiv>
          Thank you!
          <span role="img" aria-label="sheep">
            🐑
          </span>
        </ThankyouDiv>
        <div>
          <SavedAnswers
            questionnairesAnswers={questionnairesAnswers}
            setQuestionnairesAnswers={setQuestionnairesAnswers}
          />
        </div>
      </Div>
    </BrowserRouter>
  );
};

export default App;
