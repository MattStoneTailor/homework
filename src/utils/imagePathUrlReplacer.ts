import { defaultImageSize } from "../components/Image/Image.config";

const imagePathUrlReplacer = (imagePath: string) => {
  const imagePathArray = imagePath.split("/");
  imagePathArray[imagePathArray.length - 1] = `${defaultImageSize}`;
  imagePathArray[imagePathArray.length - 2] = `${defaultImageSize}`;

  return imagePathArray.join("/");
};

export default imagePathUrlReplacer;
