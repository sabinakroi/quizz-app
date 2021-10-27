import React, { useContext } from "react";
import { QuestionnaireResult } from "../types/types";

export const AnswerContext = React.createContext<
  | {
      setQuestionnairesAnswers: React.Dispatch<
        React.SetStateAction<
          {
            id: string;
            answers: string[];
          }[]
        >
      >;
      questionnairesAnswers: QuestionnaireResult[];
    }
  | undefined
>(undefined);

export const useAnswerContext = () => {
  const context = useContext(AnswerContext);
  if (!context) {
    throw new Error(
      "You cannot access AnswerContext outside of AnswerContext.Provider"
    );
  }
  return context;
};
