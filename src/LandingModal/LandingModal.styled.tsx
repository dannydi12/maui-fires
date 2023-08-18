import { styled } from "styled-components";

export const StyledLandingModal = styled.div`
  h3 {
    font-size: 22px;
  }

  .content {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-weight: 400;

    b {
      font-weight: 600;
    }

    .highlight {
      color: #ff4e4e;
    }
  }

  @media (min-width: 800px) {
    h3 {
      font-size: 40px;
    }

    p {
      font-size: 22px;
    }
  }
`;
