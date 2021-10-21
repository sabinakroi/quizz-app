import styled from "styled-components";

export const Div = styled.div`
  background-size: cover;
  margin: 0px;
  padding: 0px 20px;
  display: flex;
  box-sizing: border-box;
  display: block;
  margin: 8px;
  max-width: 600px;
  background: white;
  border-radius: 10px;
  border: gray;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 10px;
  background-attachment: scroll;
  font-family: Times, Times New Roman, serif;
`;

export const H1 = styled.h1`
  font-size: 1rem;
  background-color: white;
  width: 50%;
  height: 2rem;
  display: flex;
  align-items: center;
  border: 2px solid skyblue;
  border-radius: 25px;
  display: table;
  font-family: Times, Times New Roman, serif;
  font-size: 16px;
  color: gray;
  font-variant: normal;
  font-style: oblique;
  text-align: center;
`;
export const Wrapper = styled.div`
  max-width: 1100px;
  background: white;
  border-radius: 10px;
  border: 2px gray;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  height: 40px;
  margin: 5px 0;
  border: 3px solid #fff;
  border-radius: 10px;
`;

export const Header = styled.h1`
  background-color: white;
  color: gray;
  text-align: center;
  width: 22%;
  height: 2rem;
  display: flex;
  align-items: center;
  border: 2px solid skyblue;
  border-radius: 15px;
  display: table;
  padding: 0px 20px;
  margin: 20px;
  font-family: Times, Times New Roman, serif;
  font-size: 16px;
  color: gray;
  font-variant: normal;
  font-style: oblique;
  text-align: center;
`;

export const Answers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledDiv = styled.div`
  flex-direction: row;
  justify-content: space-between;
`;

export const Divv = styled.div`
  text-align: center;
`;

export const Ul = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5em, 1fr));
`;
