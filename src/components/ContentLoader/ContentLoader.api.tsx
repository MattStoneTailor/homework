import { QueryDataType } from "../../types/TabTypes";

const defaultLimitKey = "limit";
const getLimitQuery = (limit?: number, limitKey?: string) => limit ? `&${limitKey || defaultLimitKey}=${limit}` : "";

interface FetchContentInterface {
  queryData: QueryDataType;
  page: number;
}
export const fetchContent = async ({ queryData, page }: FetchContentInterface) => {
  const { url, limit, limitKey } = queryData;
  const useLimit = getLimitQuery(limit, limitKey);
  const res = await fetch(`${url}?page=${page}${useLimit}`);
  return res.json();
};

export const responseMapper = (response: any) => {
  if (Array.isArray(response)) {
    return response;
  }
  if (
    typeof response === "object" &&
    response.results &&
    Array.isArray(response.results)
  ) {
    return response.results;
  }
}
