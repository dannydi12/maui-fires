import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 10;

  p {
    font-size: 14px;
    font-weight: 500;
  }

  a, a:visited {
    color: #ff4e4e;
  }

  a:hover {
    cursor: pointer;
  }
`;
