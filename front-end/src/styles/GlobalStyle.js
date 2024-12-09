import { createGlobalStyle } from "styled-components";
import { fontePrincipal, pretoPrimario } from "./variables.js";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color:${pretoPrimario};
    font-family: ${fontePrincipal};
    overflow-x: hidden;
  }

  button {
    font-family: ${fontePrincipal};
  }
`;

export default GlobalStyle;
