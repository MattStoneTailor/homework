import { ReactNode } from "react";
import { Container } from "./Text.style";

interface TextInterface {
  children?: ReactNode
}
const Text = ({ children }: TextInterface) => (
  <Container>
    {children}
  </Container>
);

export default Text;
