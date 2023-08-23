import Image from "../components/Image/Image";
import Text from "../components/Text/Text";
import React from "react";
import { QueryResponseObjectType, QueryResponseType } from "../types/QueryResponseTypes";
import { determineResponseType, responseTypes } from "./determineResponseType";
import User from "../components/User/User";
import PlaceholderElement from "../components/PlaceholderElement/PlaceholderElement";

const queryResponseMapper = (content: QueryResponseType) => {
  // @ts-ignore
  if (Array.isArray(content)) {
    return content.map((contentElement: QueryResponseObjectType, index: number) => {
      switch (determineResponseType(contentElement)) {
        case responseTypes.text:
          return (
            <Text key={index}>
              {contentElement}
            </Text>
          );
        case responseTypes.image:
          return (
            <Image
              isFromPicsum
              key={index}
              src={contentElement.download_url}
              alt={contentElement.author}
            />
          );
        case responseTypes.user:
          return (
            <User
              key={index}
              data={contentElement}
            />
          );
        default:
          return <PlaceholderElement key={index} />;
      }
    });
  }
  else {
    const response = determineResponseType(content)
    if (response === responseTypes.user) {
      // @ts-ignore
      return content.results.map((contentElement: QueryResponseObjectType, index: number) => (
        <User
          key={index}
          data={contentElement}
        />
      ));
    }
    else {
      return null;
    }
  }
};

export default queryResponseMapper;