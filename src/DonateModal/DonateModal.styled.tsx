import { styled } from "styled-components";

export const StyledDonateModal = styled.div`
  h3 {
    font-size: 22px;
  }

  .content {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-weight: 400;
  }

  .buttons {
    margin-top: 30px;
    display: flex;
    gap: 15px;

    button {
      background-color: white;
      border-radius: 5px;
      border: 2px solid #ff4e4e;
      color: #ff4e4e;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      padding: 5px 10px;
      z-index: 1;
      cursor: pointer;
      box-shadow: 3px 3px 0px 0px #ff4e4e;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
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
