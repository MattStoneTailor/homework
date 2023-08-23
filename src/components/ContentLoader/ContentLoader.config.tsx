const twentyMinutes = 20 * (60 * 1000);
const tenMinutes = 10 * (60 * 1000);

export const queryConfig = {
  keepPreviousData: true, // Todo: Not working. Investigate why
  cacheTime: twentyMinutes,
  staleTime: tenMinutes,
  refetchOnMount: false,
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
};