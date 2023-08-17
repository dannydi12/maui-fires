import { FC } from "react";
import { StyledDrawer } from "./Drawer.styled";
import { useDrawerStore } from "../stores/drawerStore";
import { chooseEmoji } from "../utils/chooseEmoji";
import Event from "./Event";
import { formatPrice } from "../utils/formatPrice";

const Drawer: FC = () => {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const selectedProperty = useDrawerStore((state) => state.selectedProperty);

  return (
    <StyledDrawer $isOpen={isOpen}>
      <h2>{selectedProperty?.address}</h2>
      <div className="details-row">
        <div className="status">
          {selectedProperty?.events[0].description}{" "}
          {chooseEmoji(selectedProperty?.events[0].description || "")}
        </div>
        {selectedProperty?.events[0].price && (
          <p className="price">
            {formatPrice(selectedProperty?.events[0].price)}
          </p>
        )}
      </div>
      <div className="history">
        <h3>History</h3>
        {selectedProperty?.events.map((event) => (
          <Event event={event} />
        ))}
      </div>
    </StyledDrawer>
  );
};

export default Drawer;
