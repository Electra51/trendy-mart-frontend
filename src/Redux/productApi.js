import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi", // Change to "productApi" to avoid conflict
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1",
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
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
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
