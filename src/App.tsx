import { Data } from "./Data";
import Map from "react-map-gl";
import { StyledApp } from "./App.styled";
import { useQuery } from "@tanstack/react-query";
import MapItems from "./MapItems";

function App() {
  const { data } = useQuery<any, unknown, Data[], any>({
    queryKey: ["get_properties"],
  });

  return (
    <StyledApp>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        mapLib={import("mapbox-gl")}
        initialViewState={{
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
    </StyledApp>
  );
}

export default App;
