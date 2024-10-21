import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1/auth" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
      transformResponse: (response) => {
        const token = response.token;
        const users = response.user;
        if (token) {
          localStorage.setItem("token", token);
          if (users) {
            localStorage.setItem("user", JSON.stringify(users)); // Store user data
          }
        }
        return response;
      },
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
      transformResponse: (response) => {
        console.log("reees", response);
        const token = response.token;
        const users = response.user;
        if (token) {
          localStorage.setItem("token", token);
          if (users) {
            localStorage.setItem("user", JSON.stringify(users)); // Store user data
          }
        }
        return response;
      },
    }),
    adminAuth: builder.query({
      query: () => ({
        url: "/admin-auth",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Use the token from localStorage
        },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useAdminAuthQuery,
} = authApi;
