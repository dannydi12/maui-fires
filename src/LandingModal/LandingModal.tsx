import { FC } from "react";
import { StyledLandingModal } from "./LandingModal.styled";
import Modal from "../Modal/Modal";

type Props = {
  dismiss: () => void;
};

const LandingModal: FC<Props> = ({ dismiss }) => {
  return (
    <Modal dismiss={dismiss}>
      <StyledLandingModal>
        <h3>
          Exposing the Hidden.
          <br />
          Empowering Communities.
        </h3>

        <div className="content">
          <p>
            In the face of adversity, land becomes more than just a piece of
            earth; it represents hope, heritage, and home. We are singularly
            focused on safeguarding these vital community cornerstones from
            predatory practices.
          </p>

          <p>
            Through meticulous monitoring and real-time data representation, we
            aim to <b className="highlight">expose hidden transactions and potential exploitations</b>,
            especially in regions recovering from natural disasters or
            undergoing significant changes. Our "Lahaina Land Grab" initiative
            is just the beginning of a larger movement to provide transparency
            around property sales and acquisitions, ensuring that communities
            remain informed, involved, and insulated from undue influences.
          </p>

          <p>
            Join our cause, as we champion the rights of local communities,
            ensuring they have the knowledge and tools to protect their lands
            and legacy.
          </p>

          <p><b>Guarding Grounds, One Plot at a Time.</b></p>
        </div>
      </StyledLandingModal>
    </Modal>
  );
};

export default LandingModal;
