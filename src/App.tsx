import Map from "react-map-gl";
import { StyledApp } from "./App.styled";
import MapItems from "./MapItems/MapItemList";
import Drawer from "./Drawer/Drawer";
import { useState } from "react";
import LandingModal from "./LandingModal/LandingModal";
import Footer from "./Footer/Footer";
import LegendButton from "./LegendButton/LegendButton";
import LegendModal from "./LegendModal/LegendModal";
import DonateButton from "./DonateButton/DonateButton";
import DonateModal from "./DonateModal/DonateModal";
import data from '../example-response.json'

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showLegend, setShowLegend] = useState(false);
  const [showDonate, setShowDonate] = useState(false);

  return (
    <StyledApp>
      <h1 onClick={() => setShowModal(true)}>LandGrab Watch
      <DonateButton onClick={() => setShowDonate(true)} />
      </h1>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        mapLib={import("mapbox-gl")}
        initialViewState={{
          // lahaina location
          longitude: -156.64771868530957,
          latitude: 20.913646483159667,
          zoom: 11.5,
        }}
        maxBounds={[
          [-156.9752737894423, 20.672864436517315],
          [-156.22767799535026, 21.174269005265103],
        ]}
        // pitch={65}
        // onClick={(e) => console.log(e)}
        // onDrag={(e) => console.log(e)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {!!data && <MapItems properties={data} />}
      </Map>
      <Drawer />
      {showModal && <LandingModal dismiss={() => setShowModal(false)} />}
      {showDonate && <DonateModal dismiss={() => setShowDonate(false)} />}
      {showLegend && <LegendModal dismiss={() => setShowLegend(false)} />}
      <LegendButton onClick={() => setShowLegend(true)} />
      <Footer />
    </StyledApp>
  );
}

export default App;
