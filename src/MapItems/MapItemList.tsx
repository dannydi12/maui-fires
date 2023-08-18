import { FC } from "react";
import { Property } from "../types/Property";
import MapItem from "./MapItem";

type Props = {
  properties: Property[];
};

const MapItems: FC<Props> = ({ properties }) => {
  return (
    <>
      {properties.map((property) => (
        <MapItem
          key={property.apn + property.address}
          property={property}
        />
      ))}
    </>
  );
};

export default MapItems;
