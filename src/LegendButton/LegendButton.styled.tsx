import { styled } from "styled-components";

export const StyledLegendButton = styled.button`
  position: absolute;
  bottom: 60px;
  left: 20px;

  background-color: #ff4e4e;
  border-radius: 5px;
  border: 2px solid white;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
  z-index: 1;
  cursor: pointer;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`