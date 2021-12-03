import styled from "styled-components";

const Content = styled.div`
  display: block;
  position: fixed;
  bottom: 0px;
  left: 10px;
  padding: 0px;
`;

const SnackClose = styled.input`
  bottom: -70px;
  position: absolute;
  border: 0;
  display: none;
  z-index: 10;
  animation-name: snackbar-show;
  animation-duration: 5s;
  animation-direction: forwards;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

const Text = styled.label`
  z-index: 11;
  display: block;
  width: 100%;
  height: 100%;
  color: rgba(255,255,255,0.8);
  cursor: pointer;
  bottom: -70px;
  position: absolute;
  border: 0;
  animation-name: snackbar-show;
  animation-duration: 5s;
  animation-direction: forwards;
  animation-timing-function: ease-in-out;
  animation-delay:1s;
  animation-fill-mode: forwards;
`;

const Card = styled.div`
  display:block;
  background:#222;
  border:#f2f2f2;
  padding:10px 40px 10px 20px;
  color:#fff;
  font-family:Arial;
  position:relative;
  left:0px;
  bottom:-70px;
  transition: bottom 0.5s ease-in-out;
  z-index:9;
  animation-name: snackbar-show;
  animation-duration: 5s;
  animation-direction: forwards;
  animation-timing-function: ease-in-out;
  animation-delay:1s;
  animation-fill-mode: forwards;
`;


export {
  Card,
  Content,
  SnackClose,
  Text,
}