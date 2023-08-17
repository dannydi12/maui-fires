import styled from "styled-components";

export const StyledMapItem = styled.div<{selected: boolean}>`
  width: 43px;
  height: 43px;
  background: #e4a44a;
  border: 2px solid white;
  border-radius: 50%;

  font-size: 20px;
  padding-top: -1px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
