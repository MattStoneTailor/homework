import { QueryResponseObjectType } from "../types/QueryResponseTypes";

export const responseTypes =  {
  image: "image",
  text: "text",
};
export const determineResponseType = (data: QueryResponseObjectType) => {
  if (typeof data === "string") {
    return responseTypes.text;
  }
  else if (
    typeof data === "object" &&
    data.download_url &&
    data.author
  ) {
    return responseTypes.image;
  }
};

