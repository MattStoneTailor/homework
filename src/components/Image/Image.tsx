import { ImageElement, ImageWrapper } from "./Image.style";
import imagePathUrlReplacer from "../../utils/imagePathUrlReplacer";
import { useEffect, useRef, useState } from "react";
import Spinner from "../Spinner/Spinner";
import ScrollElementHider from "../Scroller/Scroller.hider";

interface ImageInterface {
  src: string;
  alt: string;
}
const Image = ({ src, alt }: ImageInterface) => {
  const scrollElementRef = useRef();
  const [isSourceLoaded, setSourceLoaded] = useState<boolean>(false);
  const [smallImageSrc, setSmallImageSrc] = useState<string>("");
  const [isHidden, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    if (src) {
      setSmallImageSrc(imagePathUrlReplacer(src));
    }
  }, [src]);

  return (
    <ImageWrapper
      ref={scrollElementRef}
      $isHidden={isHidden}
    >
      <ScrollElementHider
        scrollElement={scrollElementRef?.current}
        setScrollElementVisibility={(shouldHide: boolean) => setVisibility(shouldHide)}
      />
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
