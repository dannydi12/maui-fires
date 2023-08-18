import { FC } from "react";
import { StyledDonateModal } from "./DonateModal.styled";
import Modal from "../Modal/Modal";

type Props = {
  dismiss: () => void;
};

const DonateModal: FC<Props> = ({ dismiss }) => {
  return (
    <Modal dismiss={dismiss}>
      <StyledDonateModal>
        <h3>Donate</h3>

        <div className="content">
          <p>
            We worked incredibly hard to bring this data together and present it
            for the greater good. It would mean a lot if you could leave a token
            of appreciation by buying us a coffee.
          </p>

          <p>
            That being said, these communities are hurting and require our
            assistance. Please donate to a charity as well.
          </p>

          <div className="buttons">
            <button
              onClick={() =>
                window.open(
                  "https://buy.stripe.com/3cscQQa5xcUf7XW3ce",
                  "_blank"
                )
              }
            >
              Buy us a coffee
            </button>
            <button
              onClick={() =>
                window.open("https://lahainarestoration.org/", "_blank")
              }
            >
              Donate
            </button>
          </div>
        </div>
      </StyledDonateModal>
    </Modal>
  );
};

export default DonateModal;
