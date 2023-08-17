import { FC } from "react";
import { StyledDrawer } from "./Drawer.styled";

const Drawer: FC = () => {
  return <StyledDrawer $isOpen={true}>hi</StyledDrawer>
}

export default Drawer