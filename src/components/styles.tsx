import styled from "styled-components";

export const Header = styled.h1`
  background-color: white;
  color: #0c0c0c;
  text-align: center;
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  margin: 20px;
  font-size: 25px;
  color: #020202;
  font-variant: normal;
`;

export const Div = styled.div`
  margin: 0px;
  padding: 0px 20px;
  display: flex;
  box-sizing: border-box;
  display: block;
  position: relative;
  margin: 8px;
  max-width: 600px;
  background: white;
  border: #030303;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 10px;
  background-attachment: scroll;
  margin: 50px auto;
`;

export const H1 = styled.h1`
  font-size: 1rem;
  background-color: white;
  width: 100%;
  height: 2rem;
  display: flex;
  font-size: 16px;
  color: #070707;
  font-variant: normal;
  font-style: oblique;
  position: relative;
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ffffff;
  border: 2px skyblue;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(29, 30, 31, 0.25);
`;

export const Answers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  background-color: white;
  width: 50%;
  height: 2rem;
  display: flex;
  font-size: 18px;
  color: #070707;
  font-variant: normal;
  font-style: oblique;
  position: relative;
`;

export const StyledDiv = styled.div`
  flex-direction: row;
  justify-content: space-between;
`;

export const ThankyouDiv = styled.div`
  font-size: 20px;
  color: #000000;
  font-variant: normal;
  text-align: center;
  margin: 10px auto;
  opacity: 5;
  color: #000000;
  transition-duration: 0.4s;
`;

export const Ul = styled.ul`
  width: 100%;
  list-style: none;
`;

export const AddQuestionsDiv = styled.div`
  width: 100%;
  list-style: none;
`;

export const AddAnswersDiv = styled.div`
  width: 100%;
  list-style: none;
`;
export const AnswerOptionsDiv = styled.div`
  width: 100%;
  list-style: none;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

export const AddButton = styled.button`
  opacity: 5;
  background-color: #1a7fd1;
  color: #ffffff;
  transition-duration: 0.4s;

  :disabled {
    background-color: #8ebef8;
  }
`;

export const ConfirmButton = styled.button`
  opacity: 5;
  background-color: #1a7fd1;
  color: #ffffff;
  transition-duration: 0.4s;

  :disabled {
    background-color: #8ebef8;
  }
`;

export const NextButton = styled.button`
  opacity: 5;
  background-color: #1a7fd1;
  color: #ffffff;
  transition-duration: 0.4s;

  :disabled {
    background-color: #8ebef8;
  }
`;

export const PreviousButton = styled.button`
  opacity: 5;
  background-color: #1a7fd1;
  color: #ffffff;
  transition-duration: 0.4s;

  :disabled {
    background-color: #8ebef8;
  }
`;

export const AddQuestionnaireButton = styled.button`
  opacity: 5;
  background-color: #1a7fd1;
  color: #ffffff;
  transition-duration: 0.4s;

  :disabled {
    background-color: #8ebef8;
  }
`;
