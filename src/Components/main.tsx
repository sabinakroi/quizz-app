import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AnswerContext } from "../contexts/answer-context";
import { Questionnaire } from "../types/types";
import QuestionnaireSelector from "./questionnaire-selector";
import RootRoutes from "./root-routes";
import SavedAnswers from "./saved-answers";
import { Div, H1, Header, ThankyouDiv } from "./styles";

const Main = () => {
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
            <H1>Follow the link to required questionnaire </H1>
            <QuestionnaireSelector questionnaires={questionnaires} />
          </div>
        )}
        <div>
          <div>
            <AnswerContext.Provider
              value={{
                setQuestionnairesAnswers,
                questionnairesAnswers,
              }}
            >
              <RootRoutes
                handleQuestionnaireAdd={handleQuestionnaireAdd}
                questionnaires={questionnaires}
              />
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
            questionnaires={questionnaires}
          />
        </div>
      </Div>
    </BrowserRouter>
  );
};

export default Main;
