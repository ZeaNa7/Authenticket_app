import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Button = styled(Link)`
  color: white;
  background-color: #0c134f;
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
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ButtonDarkBlue = ({ to, children }) => {
  return <Button to={to}>{children}</Button>;
};

export default ButtonDarkBlue;
