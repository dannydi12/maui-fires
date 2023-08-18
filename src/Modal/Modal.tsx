import { FC, ReactNode } from "react";
import { StyledModal } from "./Modal.styled";

type Props = {
  children: ReactNode;
  dismiss: () => void;
};

const Modal: FC<Props> = ({ children, dismiss }) => {
  return (
    <StyledModal>
      <div className="overlay" onClick={dismiss}>
        <div className="body" onClick={(e) => e.stopPropagation()}>
          <button onClick={dismiss} className="exit">
            &#10005;
          </button>
          {children}
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
