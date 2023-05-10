import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: hidden;
    height: 100vh;
    margin-top: 0;
    @media (max-width: 768px) {
      overflow-y: scroll;
    }
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    position: relative;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
  }
  h2 {
    font-size: 2.8rem;
    color: white;
    font-style: italic;
    font-style: bold;
  }

  label {
    font-weight: bold;
  }

  p {
    margin-bottom: 0;
    color: white;
  }
`

export default GlobalStyle
