import styled from "styled-components";
import { Link } from "@styled-icons/boxicons-regular/Link";

import { createGlobalStyle } from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding: 60px 35px 35px 35px;
  border-radius: 50px;
  background: #292929;
  box-shadow:  5px 5px 10px #202020,
              -5px -5px 10px #323232;
`;

const Input = styled.input`
  width: 80%;
  height: 70px;
  max-width: 80%;
  color: #999;
  border: none;
  background: none;
  outline: none;
  margin: 5%;
  border-radius: 50px;
  box-shadow: inset 5px 5px 10px #202020,
              inset -5px -5px 10px #323232;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const ButtonChange = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 45px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
  color: #999;
  transition: 0.5s;
  background: linear-gradient(145deg, #252525, #2c2c2c);
  box-shadow:  5px 5px 10px #202020,
              -5px -5px 10px #323232;
  &:hover {
    background-color: #323232;
  };
  &:active {
    background:#323232;
  };
`;

const SvgLogo = styled.svg`
  width: 100%;
  height: 200px;
  max-height: 200px;
`;

const InputIcons = styled(Link) `
  position: absolute;
  height: 30px;
  color: #999;
  position: relative;
  z-index: 2;
  left: 100px;
`;

export {
  ButtonChange,
  Container,
  Content,
  Input,
  SvgLogo,
  InputIcons,
}