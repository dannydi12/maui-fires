import { FC, useState } from "react";
import { Property } from "./Property";
import MapItem from "./MapItem";
import { listOfBrokers } from "./utils/buildListOfBrokers";

type Props = {
  properties: Property[];
};

const MapItems: FC<Props> = ({ properties }) => {
  const [selected, setSelected] = useState("");

  

  console.log(listOfBrokers(properties));

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
