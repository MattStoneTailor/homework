import { QueryDataType } from "../../types/TabTypes";

interface FetchContentInterface {
  queryData: QueryDataType;
  page: number;
}
export const fetchContent = async ({ queryData, page }: FetchContentInterface) => {
  const { url, limit } = queryData;
  const res = await fetch(`${url}?page=${page}&limit=${limit}`);
  return res.json();
};
