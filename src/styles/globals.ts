import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

:root {
        --background: #060913;
        --second-background: #797A7E;
        --white: #FFFF;
        --orange: #FF5722;
  }

  body{
    overflow: auto;
    background: var(--background);
  }

`