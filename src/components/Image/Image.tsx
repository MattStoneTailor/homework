import { ImageElement, ImageWrapper } from "./Image.style";
import imagePathUrlReplacer from "../../utils/imagePathUrlReplacer";
import { useContext, useEffect, useRef, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { ScrollerContext } from "../Scroller/Scroller";
import {hideImagesOnViewportOffset} from "./Image.config";

interface ImageInterface {
  src: string;
  alt: string;
}
const Image = ({ src, alt }: ImageInterface) => {
  const scrollerContext = useContext(ScrollerContext);
  const scrollElementRef = useRef();
  const [isSourceLoaded, setSourceLoaded] = useState<boolean>(false);
  const [smallImageSrc, setSmallImageSrc] = useState<string>("");
  const [isHidden, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    if (src) {
      setSmallImageSrc(imagePathUrlReplacer(src));
    }
  }, [src]);

  useEffect(() => {
    if (scrollElementRef?.current && scrollerContext) {
      const {
        viewport: {
          top: viewportTop,
          bottom: viewportBottom
        }
      } = scrollerContext;
      const {
        offsetTop: elementTop,
        offsetHeight: elementHeight
      } = scrollElementRef.current;
      const elementBottom = elementTop + elementHeight;
      const shouldHide = (
        !(
          elementBottom >= (viewportTop - hideImagesOnViewportOffset) &&
          (viewportBottom + hideImagesOnViewportOffset) >= elementTop
        )
      );

      setVisibility(shouldHide)
    }
  }, [scrollElementRef, scrollerContext]);

  return (
    <ImageWrapper
      ref={scrollElementRef}
      $isHidden={isHidden}
    >
      {smallImageSrc && (
        <ImageElement
          $isSourceLoaded={isSourceLoaded}
          alt={alt}
          title={alt}
          src={smallImageSrc}
          onLoad={() => setSourceLoaded(true)}
        />
      )}
      {!isSourceLoaded && (
        <Spinner />
      )}
    </ImageWrapper>
  );
}

export default Image;
