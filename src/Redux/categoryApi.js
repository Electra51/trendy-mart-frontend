import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://trendy-mart-backend.vercel.app/api/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/category/get-category",
    }),
    addCategory: builder.mutation({
      query: (newCategory) => ({
        url: "/category/create-category",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newCategory,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useAddCategoryMutation } = categoryApi;
