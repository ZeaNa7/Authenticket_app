
import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global-styles";
import Space from "../components/space";
import { gql, useQuery } from '@apollo/client';
import client from '../../apolloClient';
import Popup from "../components/pop-up";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  background-image: url("../images/font_final.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  `;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;  
  padding: 2%  10% 0 15%;
`;

const Logo = styled.img`
  height: 60px;
`;
const TextContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 65%;
  color: white;
  padding: 0 10% 0 15%;
`;

const Choice = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  color: white;
  padding: 0 10% 0 15%;
`;
const GroupInput = styled.div`
  width: 100%;
`;
const Input = styled.input`
  background-color: white;
  color: black;
  border-radius: 10px 0 0 10px;
  width: 100%;
  height: 35px;
  border: solid 1px #19a7ce;
  cursor: pointer;
`;

const SelectInput = styled.div`
  display: flex;
  select {
    border-radius: 10px;
  width: 100%;
  height: 35px;
  border: solid 1px #19a7ce;
    font-size: 1.5rem;
    padding: 0 1rem;
    &:focus {
      outline: none;
      border-color: #888;
    }
  }
`;

const WrapSearchInput = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  background-color: #19a7ce;
  color: white;
  border-radius: 0 10px 10px 0;
  border: solid 1px #19a7ce;
  cursor: pointer;
`;

const RightImage = styled.div`
  display: block;
  flex-direction: column;
  width: 200px;
  img {
    width: 100%;
  };
  right: 0;
  `;

const ConnexionButton = styled.button`
color: white;
background: rgba(255, 255, 255, 0.5);
font-size: 1em;
margin: 20px;
border: none;
border-radius: 20px;
cursor: pointer;
height: 35px;
width: 150px;
font-weight: bold;
font-style: italic;
margin-top: 5px;
text-decoration: none;
justify-content: space-evenly;
align-items: center;
display: flex;
`;

const GET_EVENTS = gql`
  query GetEvents {
    getEvents {
      id
      name
    }
  }
`;

const CHECK_TICKET = gql`
  query IsTicketExist($ticket: String!, $selectedEvent: String!) {
    isTicketExist(numTicket: $ticket, nameEvent: $selectedEvent)
  }`;


const Index = () => {
  const { loading, error, data } = useQuery(GET_EVENTS, { client });
  const [ticket, setTicket] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [ticketExist, setTicketExist] = useState(false);
  
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  
  /* get all events */
  const events = data?.getEvents || [];
  /* handle event selected */
  const handleSelect = (event) => {
    setSelectedEvent(event.target.value);
  };

  /* handle num ticket enter by user */
  const handleTicketChange = (event)  => {
    setTicket(event.target.value);
  }

  /* Check if ticket exist in db */
  const checkTicket = () => {
    client
      .query({
        query: CHECK_TICKET,
        variables: { ticket, selectedEvent }
      })
      .then((result) => {
        const isTicketExist = result.data?.isTicketExist;
        if (isTicketExist === true) {
          setIsPopupOpen(true);
          setTicketExist(true);
          console.log('ticket exists');
        } else {
          setIsPopupOpen(true);
          setTicketExist(false);
          console.log('ticket does not exist');
        }
      })
      .catch((error) => {
        console.error('Error checking ticket:', error);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching events: {error.message}</p>;

  

  return (

    <>
      <GlobalStyle />
      <Wrapper>
        <WrapperColumn>
          <TopBar>
            <Logo src="../images/logo.svg" alt="Logo" />
            <ConnexionButton to="/login"><img src="../images/logout.svg" alt="logout icon"></img>Connexion</ConnexionButton>
          </TopBar>

          <TextContent>
            <h1>Strong authentification of your ticket</h1>
          </TextContent>

          <Space size={30} />

        {/* INPUTS AREA */}
          <Choice>
            <GroupInput>
              {/* Choice event */}
              <label style={{ display: "block" }}>Evènement</label>
              <SelectInput>
                <select value={selectedEvent} onChange={handleSelect}>
                  <option value="">Selectionner un évènement</option>
                  {events.map((event) => (
                    <option key={event.id} value={event.name} style={{ color: 'black' }}>
                      {event.name}
                    </option>
                  ))}
                </select>
              <Space size={60} />
              </SelectInput>

              {/* Num ticket */}
              <label style={{ display: "block" }}>Numéro de ticket</label>
              <WrapSearchInput>
                <Input type="text" name="text" value={ticket} onChange={handleTicketChange} />
                <Button onClick={checkTicket}><img alt="search icon" src="../images/search.svg"></img></Button>
              </WrapSearchInput>
            </GroupInput>
          </Choice>
        </WrapperColumn>
        <RightImage>
          <img src="../images/logo-without-title.svg" alt="illustration" />
          <img src="../images/logo-without-title.svg" alt="illustration" />
          <img src="../images/logo-without-title.svg" alt="illustration" />
        </RightImage>
      </Wrapper>
        
      <Popup
        title={ticketExist === true ? "Ticket authentifié" : "Ticket non authentifié"}
        content={ticketExist === true ? "Voulez-vous ajouter l'évènement à votre compte ?" : "Votre ticket n'est pas authentifié. Ce numéro de ticket n'existe pas pour l'évènement choisi. Voulez-vous trouver des revendeurs agrées ?"}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onConfirm={() => {  }}
      />
    </>
  );
};
export default Index;

