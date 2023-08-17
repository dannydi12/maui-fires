import { FC } from "react";
import { StyledDrawer } from "./Drawer.styled";
import { useDrawerStore } from "../stores/drawerStore";
import { chooseEmoji } from "../utils/chooseEmoji";

const Drawer: FC = () => {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const selectedProperty = useDrawerStore((state) => state.selectedProperty);

  const formatPrice = (number: number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

    return formatter.format(number);
  };

  return (
    <StyledDrawer $isOpen={isOpen}>
      <h2>{selectedProperty?.address}</h2>
      <div className="details-row">
        <div className="status">
          {selectedProperty?.events[0].description}{" "}
          {chooseEmoji(selectedProperty?.events[0].description || "")}
        </div>
        {selectedProperty?.events[0].price && (
          <p className="price">{formatPrice(selectedProperty?.events[0].price)}</p>
        )}
      </div>
    </StyledDrawer>
  );
};

export default Drawer;
