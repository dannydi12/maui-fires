import { Property } from "./types/Property";
import Map from "react-map-gl";
import { StyledApp } from "./App.styled";
import { useQuery } from "@tanstack/react-query";
import MapItems from "./MapItems/MapItemList";
import Drawer from "./Drawer/Drawer";

function App() {
  const { data } = useQuery<any, unknown, Property[], any>({
    queryKey: ["get_properties"],
  });

  return (
    <StyledApp>
      <h1>LandGrab Watch 😡</h1>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        mapLib={import("mapbox-gl")}
        initialViewState={{
          // lahaina location
          longitude: -156.64771868530957,
          latitude: 20.913646483159667,
          zoom: 11.5,
        }}
        // onClick={(e) => console.log(e)}
        // onDrag={(e) => console.log(e)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {!!data && <MapItems properties={data} />}
      </Map>
      <Drawer />
    </StyledApp>
  );
}

export default App;
