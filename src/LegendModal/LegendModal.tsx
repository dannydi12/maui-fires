import { FC } from "react";
import { StyledLegendModal } from "./LegendModal.styled";
import Modal from "../Modal/Modal";
import { chooseEmoji } from "../utils/chooseEmoji";

type Props = {
  dismiss: () => void;
};

const LegendModal: FC<Props> = ({ dismiss }) => {
  return (
    <Modal dismiss={dismiss}>
      <StyledLegendModal>
        <div className="status">
          <p className="emoji">{chooseEmoji("Listed")}</p>
          <p className="label">Listed</p>
        </div>
        <div className="status">
          <p className="emoji">{chooseEmoji("Relisted")}</p>
          <p className="label">Relisted</p>
        </div>
        <div className="status">
          <p className="emoji">{chooseEmoji("Listing Removed")}</p>
          <p className="label">Listing Removed</p>
        </div>
        <div className="status">
          <p className="emoji">{chooseEmoji("Price Changed")}</p>
          <p className="label">Price Changed</p>
        </div>
        <div className="status">
          <p className="emoji">{chooseEmoji("Pending")}</p>
          <p className="label">Pending</p>
        </div>
        <div className="status">
          <p className="emoji">{chooseEmoji("Contingent")}</p>
          <p className="label">Contingent</p>
        </div>
        <div className="status">
          <p className="emoji">{chooseEmoji("Sold")}</p>
          <p className="label">Sold</p>
        </div>
      </StyledLegendModal>
    </Modal>
  );
};

export default LegendModal;
