import { styled } from "styled-components";

export const StyledDonateButton = styled.button`
  position: absolute;
  bottom: -50px;
  left: 0;

  background-color: #ff4e4e;
  border-radius: 5px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
  z-index: 1;
  cursor: pointer;
  box-shadow: 3px 3px 0px 0px white;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

`;
