import styled from "styled-components";
import mainTheme, { devices } from "../../theme/main";
import { Link } from "react-router-dom";
import { baseTransitionTime } from "../App/App.style";

export const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 2rem;
  align-items: center;
  width: 100%;

  @media only screen and ${devices.max.lg} {
    flex-direction: column;
  }
`;

export const activeNavLinkClassname = "active";
export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${mainTheme.colors.navigationText};
  font-weight: 400;
  transition: color ${baseTransitionTime},
              font-weight ${baseTransitionTime};

  &.${activeNavLinkClassname},
  &:hover,
  &:focus {
    color: ${mainTheme.colors.navHighlightedText};
  }
`;
