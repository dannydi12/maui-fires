import { FC } from "react";
import { Property } from "../types/Property";
import MapItem from "./MapItem";

type Props = {
  properties: Property[];
};

const MapItems: FC<Props> = ({ properties }) => {
  const filteredProperties = properties.filter((prop) => {
    return new Date(prop.events[0].date).valueOf() > new Date("2023-08-08").valueOf();
  });

  return (
    <>
      {filteredProperties.map((property) => (
        <MapItem key={property.apn + property.address} property={property} />
      ))}
    </>
  );
};

export default MapItems;
