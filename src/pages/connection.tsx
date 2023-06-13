import React from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global-styles";
import { Link } from "gatsby";
import ButtonBlue from "../components/buttonBlue";
import ButtonWhite from "../components/buttonWhite";
import Space from "../components/space";


const Wrapper = styled.div`
  z-index: 0;
  display: flex;
  height: 100vh;
  background-image: url("../images/frame-bleu.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const ImageContent = styled.div`
  z-index:1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: white;
  background-color: red;
  width: 50%;
  height: 90%;
  background-image: url("../images/font_final.png");
  border-radius: 10% 0 0 10%;
  text-align: center;
  justify-content: center;
`;

const Logo = styled.img`
  margin-top: 5%;
  height: 60px;
`;
const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  width: 50%;
`;
const GroupInput = styled.div`
  width: 50%;
`;
const Input = styled.input`
  background-color: white;
  color: black;
  border-radius: 10px;
  width: 100%;
  height: 25px;
  border: solid 1px #19a7ce;
  cursor: pointer;
`;

const Title = styled.div`
  top: 408px;
  width: 70%;
  height: 40%;
  margin-left: 15%;
`;


const BottomBar = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  right: 0;
  height: 10%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  color: white;
  margin-right: 10px;
`;

const SubTextLink = styled(props => <Link {...props} />)`
  font-size: 0.8em;
  color: white;
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

const Connection = () =>

  <>
    <GlobalStyle />
    <Wrapper>
      <TextContent>
        <h1>Connexion</h1>
        <Space size={40} />
        <GroupInput>
          <label style={{ display: "block" }}>Pseudo</label>
          <Input type="text" name="pseudo" />
          <Space size={15} />
          <label style={{ display: "block" }}>Mot de passe</label>
          <Input type="password" name="password" />
          <Link to="/forgotten-password">Mot de passe oublié ?</Link>
        </GroupInput>
        <Space size={20} />
        <ButtonBlue to="/inscription">Connexion</ButtonBlue>
        <Space size={40} />
        <SubTextLink>Pas encore inscrit ?</SubTextLink>
        <ButtonWhite to="/inscription">Inscription</ButtonWhite>
      </TextContent>

      <ImageContent>
        <Title>
          <Logo src="../images/logo.svg" alt="Logo" />
          <h2>Strong authentication of your tickets</h2>
        </Title>
      </ImageContent>
      <BottomBar>
        <SubTextLink Link to="/">Mentions légales</SubTextLink>
        <SubTextLink>Conditions d'utilisations</SubTextLink>
        <SubTextLink>Plan du site</SubTextLink>
        <img src="../images/logo.svg" alt="Logo" height={25} />
      </BottomBar>
    </Wrapper>
  </>
  ;
export default Connection;
