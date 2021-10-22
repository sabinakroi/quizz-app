import React, { useContext } from "react";

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
