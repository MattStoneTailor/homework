import * as React from "react";
import { LogoLink, LogoElement } from "./Logo.style";
import LogoSvg from "./Logo.svg";
import TabsData from "../../data/Tabs.json";

const mainTabData = TabsData.find(tab => tab.path === "/");
const defaultLogoData = {
  path: "/",
  label: "Home"
};

const Logo = () => {
  const { path, label } = mainTabData || defaultLogoData;

  return (
    <LogoLink to={path}>
      <LogoElement alt="React logo" title={label} src={LogoSvg} />
    </LogoLink>
  );
};

export default Logo;
