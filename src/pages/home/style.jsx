import styled from "styled-components";
import { Link } from "@styled-icons/boxicons-regular/Link";

// import { createGlobalStyle } from "styled-components";

const Container = styled.div``;

const Content = styled.div`
  height: 100vh;
  width: 100%;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.05)), to(rgba(0,0,0,0)));
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 100%);
  background: linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 100%);
  padding: 20px 50px;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

const FlexForm = styled.div ` 
  display: -webkit-box;
  display: flex;
  z-index: 10;
  position: relative;
  width: 500px;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.3);

  @media(max-width:800px) {
    width: 100%;
    font-size: 0.9rem;
  }

  @media(max-width:360px) {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
`;

const Input = styled.input`
  border-radius: 50px 0px 0px 50px;
  border: 0;
  padding-left: 30px;
  padding-right: 30px;
  background: #fff;
  line-height: 50px;
  font-size: 1rem;
  outline: 0;
  -webkit-appearance: none;
  flex-basis: 100%;
  width: 100%;

  @media(max-width:800px) {
    flex-basis: 100%;
  }

  @media(max-width:360px) {
    flex-basis: 0;
  }
`;

const ButtonChange = styled.button`
  background: #ef3f5a;
  border: 1px solid #ef3f5a;
  color: #fff;
  padding: 0 30px;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
  border-radius: 0px 50px 50px 0px;

  &:active {
    transform: scale(0.9);
    background: #d73851;
    border: 1px solid #d73851
  };

  
`;

const Logo = styled.img`
  width: 100%;
  height: 30%;
  color: #999;
`;

const InputIcons = styled(Link) `
  font-size: 1.3rem;
`;

const WelcomeText = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 1.5rem;
`;

export {
  ButtonChange,
  Container,
  Content,
  Input,
  Logo,
  FlexForm,
  InputIcons,
  WelcomeText,
}