import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global-styles";
import { Link } from "gatsby";
import ButtonWhite from "../components/buttonWhite";
import ButtonBlue from "../components/buttonBlue";
import Space from "../components/space";
import Popup from "../components/pop-up";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #0c134f;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  margin: 2%  8% 10% 0;
`;

const Logo = styled.img`
  height: 60px;
`;
const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: white;
  margin-top: 40px;
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

const SubTextLink = styled(props => <Link {...props} />)`
  font-size: 0.8em;
  color: white;
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

const Index = () => {

const [isPopupOpen, setIsPopupOpen] = useState(false);

const handleOpenPopup = () => {
  setIsPopupOpen(true);
};

const handleClosePopup = () => {
  setIsPopupOpen(false);
};

const handleConfirmPopup = () => {
  // Effectuez des actions spécifiques à la confirmation du pop-up
  setIsPopupOpen(false);
};


  return(
        <>
        <GlobalStyle />
        <Wrapper>
            <TopBar>
            <Logo src="../images/logo.svg" alt="Logo" />
            </TopBar>
            <TextContent>
            <h1>Mot de passe oublié</h1>
            <Space size={30}/>
            <GroupInput>
                <label style={{ display: "block" }}>Adresse email</label>
                <Input type="text" name="email" />
                <p>
                Veuillez entrer votre adresse e-mail. Les instructions pour
                réinitialiser votre mot de passe vous seront envoyé
                immédiatement.
                </p>
            </GroupInput>
            <Space size={10}/>
            <ButtonBlue to="/">Envoyer</ButtonBlue>
            <button onClick={handleOpenPopup}>Ouvrir le pop-up</button>
            <Space size={10}/>
            <SubTextLink>Retour à la connexion ?</SubTextLink>
            <ButtonWhite to="/connection">Connexion <img style={{marginLeft: 10}} src="../images/logo-without-text.svg" alt="logo"></img> </ButtonWhite>
            </TextContent>
        </Wrapper>
        <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onConfirm={handleConfirmPopup}
      />
        </>
);
};
export default Index;

