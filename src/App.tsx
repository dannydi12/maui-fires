import { Property } from "./types/Property";
import Map from "react-map-gl";
import { StyledApp } from "./App.styled";
import { useQuery } from "@tanstack/react-query";
import MapItems from "./MapItems/MapItemList";
import Drawer from "./Drawer/Drawer";
import { AxiosRequestConfig } from "axios";
import Modal from "./Modal/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(true);

  const { data } = useQuery<any, unknown, Property[], any>({
    queryKey: [
      "get_properties",
      { params: { start_date: "2023-08-08" } } as AxiosRequestConfig,
    ],
  });

  return (
    <StyledApp>
      <h1 onClick={() => setShowModal(true)}>LandGrab Watch</h1>
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
      {showModal && (
        <Modal dismiss={() => setShowModal(false)}>
          <h3>
            Exposing the Hidden.
            <br />
            Empowering Communities.
          </h3>

          <div className="content">
            <p>
              In the face of adversity, land becomes more than just a piece of
              earth; it represents hope, heritage, and home. We are singularly
              focused on safeguarding these vital community cornerstones from
              predatory practices.
            </p>

            <p>
              Through meticulous monitoring and real-time data representation,
              we aim to expose hidden transactions and potential exploitations,
              especially in regions recovering from natural disasters or
              undergoing significant changes. Our "Lahaina Land Grab" initiative
              is just the beginning of a larger movement to provide transparency
              around property sales and acquisitions, ensuring that communities
              remain informed, involved, and insulated from undue influences.
            </p>

            <p>
              Join our cause, as we champion the rights of local communities,
              ensuring they have the knowledge and tools to protect their lands
              and legacy.
            </p>

            <p>Guarding Grounds, One Plot at a Time.</p>
          </div>
        </Modal>
      )}
    </StyledApp>
  );
}

export default App;
