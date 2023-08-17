import { styled } from "styled-components";

export const StyledDrawer = styled.div<{
  $isOpen: boolean;
}>`
  right: ${({ $isOpen }) => ($isOpen ? "0px" : "-300px")};
  top: 0;
  width: 300px;
  height: 100%;
  z-index: 10;
  position: absolute;
  background-color: #fefefe;
  transition: right 0.3s ease-in-out;
`;
