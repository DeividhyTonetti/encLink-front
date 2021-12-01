import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Arial, Helvetica, sans-serif; 
    transition: all 0.25s linear;
    text-rendering: optimizeLegibility;
    min-width: 510px;
  }

  html, border-style, #root {
    height: 100%;
  }
`;