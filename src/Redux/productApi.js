import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
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
    createProduct: builder.mutation({
      query: (productData) => ({
        url: "/products/create-product",
        method: "POST",
        body: productData,
      }),
    }),
    getProducts: builder.query({
      query: () => "/products/get-product",
    }),
    getSingleProduct: builder.query({
      query: (pid) => `/products/get-product/${pid}`,
    }),
    deleteProduct: builder.mutation({
      query: (pid) => ({
        url: `/products/delete-product/${pid}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
} = productApi;
