import { Wrapper, Content } from "./Header.style";

import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Header = () => (
  <Wrapper>
    <Content>
      <Logo />
      <Navigation />
    </Content>
  </Wrapper>
);

export default Header;
