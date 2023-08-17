import { FC, useState } from "react";
import { Property } from "../types/Property";
import MapItem from "./MapItem";

type Props = {
  properties: Property[];
};

const MapItems: FC<Props> = ({ properties }) => {
  const [selected, setSelected] = useState("");

  return (
    <>
      {properties.map((property) => (
        <MapItem
          key={property.apn + property.address}
          selected={property.apn + property.address === selected}
          setSelected={setSelected}
          property={property}
        />
      ))}
    </>
  );
};

export default MapItems;
