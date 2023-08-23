import React, { useEffect, useState, memo, useCallback } from "react";
import { useQuery } from "react-query";
import { Container } from "./ContentLoader.style";
import { TabInterface } from "../../types/TabTypes";
import { queryConfig } from "./ContentLoader.config";
import Spinner from "../Spinner/Spinner";
import { QueryResponseType } from "../../types/QueryResponseTypes";
import Scroller from "../Scroller/Scroller";
import { fetchContent } from "./ContentLoader.api";
import queryResponseMapper from "../../utils/queryResponseMapper";

type ContentLoaderInterface = {
  tabData?: TabInterface,
};
const ContentLoader = ({ tabData }: ContentLoaderInterface) => {
  const [content, setContent] = useState<QueryResponseType>([]);
  const [localPager, setLocalPager] = useState<number>(0);
  const pagerRef = React.useRef(localPager);
  const setPager = (newPage: number) => {
    pagerRef.current = newPage;
    setLocalPager(newPage);
  };
  const {
    data, refetch, isLoading,
    isFetching, isSuccess
  } = useQuery(
    ['content', pagerRef.current, tabData],
    () => (
      tabData?.queryData &&
      fetchContent({
        queryData: tabData.queryData,
        page: pagerRef.current
      })
    ),
    queryConfig
  );
  const onBottomReached = useCallback(() => {
    if (!isLoading && !isFetching) {
      setPager(pagerRef.current + 1);
    }
  }, [isLoading, isFetching]);

  useEffect(() => {
    // Constructor. Set pager to 0 and scroll to the top
    setPager(0);
    setContent([]);
    window.scrollTo(0, 0);
  }, [tabData]);

  // Refetch if the pager changed
  useEffect(() => {
    refetch();
  }, [pagerRef.current]);

  useEffect(() => {
    // Update content with the new response
    if (data) {
      if (pagerRef.current === 0) {
        setContent((data?.results || data));
      }
      else {
        setContent([
          ...content,
          ...(data?.results || data),
        ]);
      }
    }
  }, [data]);

  return (
    <Scroller
      childElementsLength={content?.length}
      onBottomReached={onBottomReached}
    >
      <Container>
        {isSuccess && queryResponseMapper(content)}
        <Spinner />
      </Container>
    </Scroller>
  );
};

export default memo(ContentLoader);
