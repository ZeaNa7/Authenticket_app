import React from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global-styles";
import { Link } from "gatsby";
import ButtonBlue from "../components/buttonBlue";
import ButtonDarkBlue from "../components/buttonDarkBlue";
import Space from "../components/space";


const Wrapper = styled.div`
  z-index: 0;
  display: flex;
  height: 100vh;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #0c134f
`;
const ImageContent = styled.div`
  z-index:1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #0c134f;
  width: 50%;
  height: 90%;
  background: rgb(230,115,36);
  background: linear-gradient(0deg, rgba(230,115,36,1) 5%, rgba(245,45,143,1) 85%);
  border-radius: 0 10% 10% 0;
  text-align: center;
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
  color: #0c134f;
  width: 50%;
`;
const GroupInput = styled.div`
  display: flex;  
  justify-content: space-between;
  width: 90%;
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

const BottomBar = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  height: 10%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  color: #0c134f;
  margin-left: 10px;
`;

const SubTextLink = styled(props => <Link {...props} />)`
  font-size: 0.8em;
  color: #0c134f;
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // height: 100vh;
  color: #0c134f;
  width:  45%;
  left: 0;
`;


const Inscription = () =>

        <>
        <GlobalStyle />
        <Wrapper>
            
            <ImageContent>
            <Logo src="../images/logo.svg" alt="Logo" />
            <h2>Strong authentication of your tickets</h2>
            </ImageContent>
            <BottomBar>
            <img src="../images/logo_bleu_authenticket.svg" alt="Logo" height={25}/>
            <SubTextLink>Mentions légales</SubTextLink>
            <SubTextLink>Conditions d'utilisations</SubTextLink>
            <SubTextLink>Plan du site</SubTextLink>
            </BottomBar>

            <TextContent>
            <h1>Inscription</h1>
            <Space size={15} />
            <InputForm>
            <label style={{ display: "block" }}>Pseudo</label>
            <Input type="text" name="pseudo" />
            </InputForm>
            <GroupInput>
              <InputForm>
                <label style={{ display: "block" }}>Nom</label>
                <Input type="text" name="last-name" />
              </InputForm>
              <InputForm>
                <label style={{ display: "block" }}>Prénom</label>
                <Input type="text" name="first-name" />
              </InputForm>
            </GroupInput>
            <InputForm>
            <label style={{ display: "block" }}>Adresse email</label>
            <Input type="text" name="mail" />
            </InputForm>
            <GroupInput>
              <InputForm>
                <label style={{ display: "block" }}>Mot de passe</label>
                <Input type="password" name="password" />
              </InputForm>
              <InputForm>
                <label style={{ display: "block" }}>Confirmation mot de passe</label>
                <Input type="password" name="password" />
              </InputForm>
            </GroupInput>
              {/* <input type="checkbox" name="confidentiality" >J'accepte les Conditions d'utilisations et la politique de confidentialité</input>
              <input type="checkbox" name="scales" >Je souhaite recevoir les informations marketing d'Authenticket</input>
        */}
            
            <ButtonBlue to="/">Inscription</ButtonBlue>
            <SubTextLink>Déjà un compte ?</SubTextLink>
            <ButtonDarkBlue to="/connection">Connexion</ButtonDarkBlue>
            </TextContent>
        </Wrapper>
        </>
        ;
export default Inscription;
