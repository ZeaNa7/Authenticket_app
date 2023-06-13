import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global-styles";
import ButtonWhite from "./buttonWhite";

const Wrapper = styled.div`
  z-index: 0;
  display: flex;
  height: 100vh;
  background-image: url("../images/frame-bleu.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`; 


const LeftBar = styled.div`
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0 0 20px;
`;

const UserProfileContainer = styled.div`
  z-index: 1;
  background-color: #5C469C;
  right: 0;
  height: 60%;
  width: 70%;
  margin: 10% 15% 0 10%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
`;

const UserPhoto = styled.img`
  width: 40%;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const RigthButton = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  height: 100px;
  margin-right: 13%;
  margin-top: 20px;
`;

const UserProfile = ({ firstName, lastName, email, photoUrl}) => {
  return (
    <>
    <GlobalStyle />
    <Wrapper>
    <LeftBar>
        <img src="../images/logo.svg" alt="Authenticket" />
        <Link to="">Profil</Link>
        <Link to="">Evenements</Link>
    </LeftBar>
      <UserProfileContainer>
        <UserPhoto src={photoUrl} alt="Photo de profil" />
        <UserInfo>
          <p>Nom : {lastName}</p>
          <p>Prénom : {firstName}</p>
          <p>Email : {email}</p>
        </UserInfo>
      </UserProfileContainer>
      <RigthButton>
        <ButtonWhite style={{width: '400px'}}>Authentifier un ticket</ButtonWhite>
      </RigthButton>
    </Wrapper>
    </>
  );
};

export default UserProfile;
