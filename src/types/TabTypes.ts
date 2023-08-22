export type ApiUrlType = string;
export type QueryDataType = {
  url: ApiUrlType;
  limit: number;
};
export interface TabInterface {
  label: string;
  path: string;
  queryData?: QueryDataType;
  component?: string;
}

export type TabIndexType = number;
