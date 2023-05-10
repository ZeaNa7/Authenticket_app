import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Button = styled(Link)`
  background-color: #19a7ce;
  font-size: 1em;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  height: 30px;
  width: 250px;
  color: white;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  padding-top: 10px;
  margin: 20px
`;

const ButtonBlue = ({ to, children }) => {
  return <Button to={to}>{children}</Button>;
};

export default ButtonBlue;
