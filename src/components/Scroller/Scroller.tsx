import {
  createContext, ReactNode, useCallback, useEffect,
  useRef, useState
} from "react";
import { Container, ScrollToTopButton } from "./Scroller.style";
import debounce from "../../utils/debounce";
import {bottomOffset, showScrollToTopButtonOffset} from "./Scroller.config";

type ViewConfigType = {
  top: number,
  bottom: number
};
const getViewportConfig = ({ top, bottom }: ViewConfigType) :
  ScrollerContextInterface => ({
  viewport: {
    top, bottom,
  }
});
export interface ScrollerContextInterface {
  viewport: {
    top: number;
    bottom: number;
  }
}
const defaultScrollerContext = getViewportConfig({ top: 0, bottom: 0 });
export const ScrollerContext = createContext<ScrollerContextInterface>(defaultScrollerContext);

interface ScrollerInterface {
  childElementsLength: number;
  children: ReactNode;
  onBottomReached: () => void;
}
const Scroller = ({
  children, childElementsLength, onBottomReached
}: ScrollerInterface) => {
  const isStartToListen = childElementsLength > 0;
  const scrollContainerRef = useRef();
  const [isShowScrollToTopButton, showScrollToTopButton] = useState<boolean>(false);
  const [scrollViewport, setScrollViewport] = useState<ScrollerContextInterface>(defaultScrollerContext);

  const onScroll = debounce(() => handleScroll());
  const handleScroll = () => {
    const currentScrollPosition = window.scrollY + window.innerHeight;
    const bottomPosition = document.documentElement.scrollHeight - bottomOffset;

    if (currentScrollPosition > showScrollToTopButtonOffset && !isShowScrollToTopButton) {
      showScrollToTopButton(true);
    }
    else if (currentScrollPosition < showScrollToTopButtonOffset && isShowScrollToTopButton) {
      showScrollToTopButton(false);
    }
    if (currentScrollPosition >= bottomPosition) onBottomReached();
    setScrollViewport(getViewportConfig({
      top: currentScrollPosition - window.innerHeight,
      bottom: currentScrollPosition,
    }));
  };

  const onScrollToTopClick = useCallback(() => {
    showScrollToTopButton(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    // Run it once in the beginning
    if (isStartToListen) handleScroll();
  }, [childElementsLength]);

  useEffect(() => {
    if (scrollContainerRef?.current && isStartToListen) {
      window.document.addEventListener("scroll", onScroll);

      return () => {
        window.document.removeEventListener("scroll", onScroll);
      }
    }
  }, [scrollContainerRef, isStartToListen, onScroll]);

  return (
    <ScrollerContext.Provider value={scrollViewport}>
      <ScrollToTopButton
        $isHidden={!isShowScrollToTopButton}
        onClick={onScrollToTopClick}
      />
      <Container ref={scrollContainerRef}>
        {children}
      </Container>
    </ScrollerContext.Provider>
  );
}

export default Scroller;
