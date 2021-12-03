import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    /* margin: 0; */
    /* padding: 0; */
    /* outline: 0; */
    box-sizing: border-box;
    &:before, &:after {
      -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    }
  }

  &:-webkit-input-placeholder {
    color: #56585b;
  }
  
  &:-moz-placeholder {
    color: #56585b;
  }

  body {
    /* background: ${({ theme }) => theme.background}; */
    /* color: ${({ theme }) => theme.text}; */
    font-family: 'Lato', sans-serif;
    margin: 0;
    background: url('https://source.unsplash.com/G8rRItjrwkA') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    color: #0a0a0b;
    overflow: hidden;
  }

  html, border-style, #root {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;