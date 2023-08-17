import { FC } from "react";
import { StyledDrawer } from "./Drawer.styled";
import { useDrawerStore } from "../stores/drawerStore";

const Drawer: FC = () => {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const selectedProperty = useDrawerStore((state) => state.selectedProperty);
  
  return (
    <StyledDrawer $isOpen={isOpen}>{selectedProperty?.address}</StyledDrawer>
  );
};

export default Drawer;
