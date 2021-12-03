import styled from "styled-components";

const Card = styled.div`
  visibility: visible !important;
  min-width: 400px; 
  background-color: ${({ isColored }) => (isColored ? "#7ac74f" : "#F08080")};
  color: #fff; 
  text-align: center;
  border-radius: 50px; 
  padding: 16px; 
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 1.5rem;
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
  transition: height 0.50s linear;
`;

export {
  Card,
}