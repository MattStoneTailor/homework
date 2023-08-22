import { useContext, useEffect } from "react";
import { ScrollerContext } from "./Scroller";
import { hideContentOnViewportOffset } from "./Scroller.config";

type ScrollElementHiderType = {
  scrollElement?: HTMLElement,
  setScrollElementVisibility: (isVisible: boolean) => void
};
const ScrollElementHider = ({
  scrollElement,
  setScrollElementVisibility
}: ScrollElementHiderType) => {
  const scrollerContext = useContext(ScrollerContext);
  useEffect(() => {
    if (scrollElement && scrollerContext) {
      const {
        viewport: {
          top: viewportTop,
          bottom: viewportBottom
        }
      } = scrollerContext;
      const {
        offsetTop: elementTop,
        offsetHeight: elementHeight
      } = scrollElement;
      const elementBottom = elementTop + elementHeight;
      const shouldHide = (
        !(
          elementBottom >= (viewportTop - hideContentOnViewportOffset) &&
          (viewportBottom + hideContentOnViewportOffset) >= elementTop
        )
      );

      setScrollElementVisibility(shouldHide);
    }
  }, [scrollElement, scrollerContext]);

  return null;
};

export default ScrollElementHider;