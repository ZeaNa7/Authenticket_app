import React from 'react';
import styled from 'styled-components';


const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: #0c134f;
  padding: 20px;
  border-radius: 10px;
  display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Button1 = styled.button`
  margin-left: 10px;
  border-radius: 15px;
  border: none;
  text-decoration: none;
  color: #0c134f;
  width: 50px;
  height: 30px;
  margin-right: 20px;
  font-weight: bold;
`;

const Button2 = styled.button`
  margin-left: 10px;
  border-radius: 15px;
  border: none;
  text-decoration: none;
  color: white;
  width: 50px;
  height: 30px;
  background-color: #19a7ce;
  font-weight: bold;
`;

const Title = styled.p`
    color: white;
    font-size: 1.5rem;
    font-style: normal;
    margin-bottom: 40px;
`;

const GroupTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
`;


const Popup = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <PopupContainer>
        <PopupContent>
        <GroupTitle>
        <img src="../images/validate.svg" alt="Autenticket" />
          <Title>Ticket authentifié !</Title>
          </GroupTitle>
          <p>Voulez-vous ajouter l'évènement à votre porte-feuille ?</p>
  
          <ButtonContainer>
            <Button1 onClick={onClose}>Non</Button1>
            <Button2 onClick={onConfirm}>Oui</Button2>
          </ButtonContainer>
        </PopupContent>
      </PopupContainer>
    );
  };
  
  export default Popup;
  
