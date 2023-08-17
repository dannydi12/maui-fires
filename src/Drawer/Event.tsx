import { FC } from "react";
import { HouseEvent } from "../types/Property";
import { StyledEvent } from "./Event.styled";
import { chooseEmoji } from "../utils/chooseEmoji";
import { formatPrice } from "../utils/formatPrice";

type Props = {
  event: HouseEvent;
};

const Event: FC<Props> = ({ event }) => {
  return (
    <StyledEvent>
      <div className="event-wrapper">
        <p className="emoji">{chooseEmoji(event.description)}</p>
        <div className="event-details">
          <p className="event-title">{event.description}</p>
          <p className="date">{event.date}</p>
        </div>
      </div>
      {event.price && <p>{formatPrice(event.price)}</p>}
    </StyledEvent>
  );
};

export default Event;
