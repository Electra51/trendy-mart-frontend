import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/category/get-category",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
