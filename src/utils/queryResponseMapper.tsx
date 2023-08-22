import Image from "../components/Image/Image";
import Text from "../components/Text/Text";
import React from "react";
import { QueryResponseObjectType } from "../types/QueryResponseTypes";
import { determineResponseType, responseTypes } from "./determineResponseType";

type QueryResponseMapper = {
  key: number,
  contentElement: QueryResponseObjectType
};
const queryResponseMapper = ({
  key, contentElement,
}: QueryResponseMapper) => {
  switch (determineResponseType(contentElement)) {
    case responseTypes.text:
      return (
        <Text key={key}>
          {contentElement}
        </Text>
      );
    case responseTypes.image:
      return (
        <Image
          key={key}
          src={contentElement.download_url}
          alt={contentElement.author}
        />
      );
    default:
      return null;
  }
};

export default queryResponseMapper;