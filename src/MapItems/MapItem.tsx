import { FC } from "react";
import { Marker } from "react-map-gl";
import { Property } from "../types/Property";
import { StyledMapItem } from "./MapItem.styled";
import { stringToPastelColor } from "../utils/colorMappings";
import { useDrawerStore } from "../stores/drawerStore";
import { chooseEmoji } from "../utils/chooseEmoji";

type Props = {
  selected: boolean;
  property: Property;
  setSelected: (input: string) => void;
};

const MapItem: FC<Props> = ({ property, setSelected, selected }) => {
  const selectProperty = useDrawerStore((state) => state.selectProperty);

  return (
    <Marker
      latitude={property.latitude}
      longitude={property.longitude}
      style={{ cursor: "pointer" }}
      onClick={() => {
        setSelected(property.apn + property.address);
        selectProperty(property);
      }}
    >
      <StyledMapItem
        selected={selected}
        background={stringToPastelColor(property.listing_brokers[0])}
      >
        {chooseEmoji(property.events[0].description)}
      </StyledMapItem>
    </Marker>
  );
};

export default MapItem;
