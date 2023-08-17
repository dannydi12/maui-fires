import { useEffect, useState } from "react";
import axios from "axios";
import { Data } from "./Data";
import Map, { Marker, Popup } from "react-map-gl";
import { StyledApp } from "./App.styled";

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    populateData();
  }, []);

  const populateData = async () => {
    const { data: res } = await axios<Data[]>({
      url: "http://164.92.105.157:2000/get_properties",
      method: "GET",
      params: { api_key: "asd723erbkjhabsd8213" },
    });

    setData(res);
  };

  console.log();

  return (
    <StyledApp>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZGFubnlkaTEyIiwiYSI6ImNsbGVnejM4NDBnbmIzZ25nZTRvaTlmajEifQ.fp0Kus3cRBjo3TCGd0GF-w"
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: -156.64771868530957,
          latitude: 20.913646483159667,
          zoom: 11.5,
        }}
        onClick={(e) => console.log(e)}
        onDrag={(e) => console.log(e)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {data.map((item) => (
          <>
            <Marker
              key={item.address + "m"}
              latitude={item.latitude}
              longitude={item.longitude}
              onClick={() => {
                console.log(item.address, "hi");
                setSelected(item.address);
              }}
            />
            {selected === item.address && (
              <Popup
                key={item.address + "p"}
                latitude={item.latitude}
                longitude={item.longitude}
                offset={10}
              >
                <div style={{ width: "20px", height: "100px" }}>
                  heloo there
                </div>
              </Popup>
            )}
          </>
        ))}
      </Map>
    </StyledApp>
  );
}

export default App;
