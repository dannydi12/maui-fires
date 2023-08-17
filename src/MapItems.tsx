import { FC, useState } from "react";
import { Data } from "./Data";
import MapItem from "./MapItem";

type Props = {
  properties: Data[];
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
