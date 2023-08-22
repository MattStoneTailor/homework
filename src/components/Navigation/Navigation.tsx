import * as React from "react";
import { useLocation } from "react-router-dom";
import {
  NavLink, NavigationWrapper, activeNavLinkClassname
} from "./Navigation.style";
import TabsData from "../../data/Tabs.json";

const Navigation = () => {
  const location = useLocation();

  return (
    <NavigationWrapper>
      {TabsData.map(({ label, path }, index) => {
        const isActive = path === location.pathname;

        return (
          <NavLink
            title={label}
            key={index}
            to={path}
            className={(isActive ? activeNavLinkClassname : "")}
          >
            {label}
          </NavLink>
        );
      })}
    </NavigationWrapper>
  );
};

export default Navigation;
