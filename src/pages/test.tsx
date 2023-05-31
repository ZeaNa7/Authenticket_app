import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '../../apolloClient';

const GET_EVENTS = gql`
  query GetEvents {
    getEvents {
      id
      name
    }
  }
`;

const EventList = () => {
  const { loading, error, data } = useQuery(GET_EVENTS, { client });

  useState(() => {
    console.log('data', data);
  }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching events: {error.message}</p>;

  console.log(data);

  
  return (
    <div>
      <h1>Events</h1>
      <ul>
        {data.getEvents.map(event => (
          <li key={event.id}>{event.name}</li>
        ))
        }
      </ul>
    </div>
  );
};

export default EventList;
