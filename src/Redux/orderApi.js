// // src/Redux/orderApi.js
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const orderApi = createApi({
//   reducerPath: "orderApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:8080/api/v1",
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     placeOrder: builder.mutation({
//       query: (orderData) => ({
//         url: "/orders/order-place",
//         method: "POST",
//         body: orderData,
//       }),
//     }),
//   }),
// });

// export const { usePlaceOrderMutation } = orderApi;

// src/Redux/orderApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://trendy-mart-backend.vercel.app/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders/order-place",
        method: "POST",
        body: orderData,
      }),
    }),
    getUserOrders: builder.query({
      query: () => ({
        url: "/orders/orders",
        method: "GET",
      }),
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "orders/all-orders",
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetUserOrdersQuery,
  useGetAllOrdersQuery,
} = orderApi;
