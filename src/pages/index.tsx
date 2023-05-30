import React from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/styles";
import Space from "../components/space";
import ButtonWhite from "../components/buttonWhite";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url("../images/font_final.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TopBar = styled.div`
  display: flex;
  // justify-content: flex-start;
  align-items: space-evenly;
  height: 100px;
  padding: 2%  10% 0 10%;
`;

const Logo = styled.img`
  height: 60px;
`;
const TextContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  color: white;
  padding: 0 10% 0 10%;
`;

const Choice = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  color: white;
  padding: 0 10% 0 10%;
`;
const GroupInput = styled.div`
  width: 70%;
`;
const Input = styled.input`
  background-color: white;
  color: black;
  border-radius: 10px;
  width: 100%;
  height: 35px;
  border: solid 1px #19a7ce;
  cursor: pointer;
`;

const Index = () => {

  return(
    
        <>
        <GlobalStyle />
        <Wrapper>
            <TopBar>
              <Logo src="../images/logo.svg" alt="Logo" />
              <ButtonWhite to="/login">Connexion</ButtonWhite>
            </TopBar>
            <TextContent>
              <h1>Strong authentification of your ticket</h1>
            </TextContent>
            <Space size={30}/>
            <Choice>
            <GroupInput>
                <label style={{ display: "block" }}>Numéro de ticket</label>
                <Input type="text" name="text" />
            </GroupInput>
            </Choice>
        </Wrapper>
        </>
);
};
export default Index;

