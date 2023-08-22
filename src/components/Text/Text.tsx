import {ReactNode, useRef, useState} from "react";
import { TextWrapper, TextElement } from "./Text.style";
import ScrollElementHider from "../Scroller/Scroller.hider";

interface TextInterface {
  children?: ReactNode
}
const Text = ({ children }: TextInterface) => {
  const scrollElementRef = useRef();
  const [isHidden, setVisibility] = useState<boolean>(false);

  return (
    <TextWrapper
      ref={scrollElementRef}
      $isHidden={isHidden}
    >
      <ScrollElementHider
        scrollElement={scrollElementRef?.current}
        setScrollElementVisibility={(shouldHide: boolean) => setVisibility(shouldHide)}
      />
      <TextElement>
        {children}
      </TextElement>
    </TextWrapper>
  );
};

export default Text;
