import styled from "styled-components";
import { devices } from "../../theme/main";

export const Container = styled.section`
  grid-template-columns: 100%;
  display: grid;
  gap: 10px;

  @media only screen and ${devices.min.md} {
    grid-template-columns: 50% 50%;
  }
  @media only screen and ${devices.min.lg} {
    grid-template-columns: 33% 33% 33%;
  }
`;
