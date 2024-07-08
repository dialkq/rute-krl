import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

interface Station {
  id: string;
  name: string;
}

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }) =>
  async ({ url, method, data, params }: { url: string; method: string; data?: any; params?: any }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as any;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const stationApi = createApi({
  reducerPath: 'stationApi',
  baseQuery: axiosBaseQuery({ baseUrl: '/api/v1/' }),
  endpoints: (builder) => ({
    getStations: builder.query<Station[], void>({
      query: () => ({ url: 'station', method: 'get' }),
    }),
  }),
});

export const { useGetStationsQuery } = stationApi;