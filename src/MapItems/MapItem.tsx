import { FC } from "react";
import { Marker } from "react-map-gl";
import { Property } from "../types/Property";
import { StyledMapItem } from "./MapItem.styled";
import { stringToPastelColor } from "../utils/colorMappings";
import { useDrawerStore } from "../stores/drawerStore";

type Props = {
  selected: boolean;
  property: Property;
  setSelected: (input: string) => void;
};

const MapItem: FC<Props> = ({ property, setSelected, selected }) => {
  const selectProperty = useDrawerStore((state) => state.selectProperty)

  const chooseEmoji = () => {
    switch (property.events[0].description) {
      case "Contingent":
        return "🤝";
      case "Listed":
        return "📝";
      case "Listing Removed":
        return "✋";
      case "Price Changed":
        return "📉";
      case "Relisted":
        return "🧲";
      case "Sold":
        return "💰";
      default:
        return "😡";
    }
  };

  return (
    <Marker
      latitude={property.latitude}
      longitude={property.longitude}
      style={{ cursor: "pointer" }}
      onClick={() => {
        console.log(property.apn, property.address);
        setSelected(property.apn + property.address);
        selectProperty(property)
      }}
    >
      <StyledMapItem selected={selected} background={stringToPastelColor(property.listing_brokers[0])}>{chooseEmoji()}</StyledMapItem>
    </Marker>
  );
};

export default MapItem;
