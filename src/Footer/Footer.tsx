import { FC } from "react";
import { StyledFooter } from "./Footer.styled";

const Footer: FC = () => {
  return (
    <StyledFooter>
      <p>
        Created by <a href="https://twitter.com/byroncbriggs" target="_blank">@byroncbriggs</a> & <a href="https://twitter.com/dan_thebuilder" target="_blank">@dan_thebuilder</a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
