import { QueryClient } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: { api_key: "asd723erbkjhabsd8213" },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 10000,
      retry: false,
      queryFn: async ({ queryKey }) => {
        const [_key, options] = queryKey;

        const axiosConfig = (options || {}) as AxiosRequestConfig;

        const { data } = await baseApi({
          method: "GET",
          url: _key as string,
          ...axiosConfig,
          params: {
            ...axiosConfig.params,
          },
        });

        return data;
      },
    },
    mutations: {
      mutationFn: async (variables) => {
        const { data } = await baseApi(variables as AxiosRequestConfig);
        return data;
      },
    },
  },
});
