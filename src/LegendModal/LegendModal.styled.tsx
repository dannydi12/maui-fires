import { styled } from "styled-components";

export const StyledLegendModal = styled.div`
display: flex;
flex-direction: column;

width: 250px;

h3 {
  font-size: 32px;
  font-weight: 700;
}

.status {
  display: flex;
  align-items: center;
  gap: 25px;

  border-bottom: #e4e4e4 1px solid;
  padding: 10px 10px;

  &:last-child {
    border-bottom: none;
  }
}

.emoji {
  font-size: 28px;
}

.label {
  font-weight: 400;
  font-size: 18px;
}

`