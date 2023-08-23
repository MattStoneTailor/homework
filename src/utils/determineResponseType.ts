import { QueryResponseObjectType } from "../types/QueryResponseTypes";

export const responseTypes =  {
  image: "image",
  text: "text",
  user: "user",
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
  else if (
    (
      typeof data === "object" &&
      data.results &&
      Array.isArray(data.results)
    ) || (
      typeof data.gender === "string" &&
      typeof data.email === "string"
    )
  ) {
    return responseTypes.user;
  }
};

