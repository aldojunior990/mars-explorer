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
        --background: #0F0E0E;
        --second-background: #201F24;
        --white: #FFFF;
        --blue: #186BB2;
  }

  body{
    overflow: auto;
    background: var(--background);
  }

`