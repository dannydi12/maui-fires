import { FC } from "react";
import { StyledDonateButton } from "./DonateButton.styled";

type Props = {
  onClick: () => void;
};

const DonateButton: FC<Props> = ({ onClick }) => {
  return (
    <StyledDonateButton
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      Donate
    </StyledDonateButton>
  );
};

export default DonateButton;
