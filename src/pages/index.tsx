
import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/styles";
import Space from "../components/space";
import ButtonWhite from "../components/buttonWhite";
import { gql, useQuery } from '@apollo/client';
import client from '../../apolloClient';


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
    console.log('ticket', ticket);
    console.log('selectedEvent', selectedEvent);

    client
      .query({
        query: CHECK_TICKET,
        variables: { ticket, selectedEvent }
      })
      .then((result) => {
        const isTicketExist = result.data?.isTicketExist;
        if (isTicketExist === true) {
          console.log('ticket exists');
        } else {
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
      {/* Wrapper canvas */}
      <Wrapper>

        <TopBar>
          <Logo src="../images/logo.svg" alt="Logo" />
          {/* <ButtonWhite to="/login">Connexion</ButtonWhite> */}
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
        
      </Wrapper>
    </>
  );
};
export default Index;

