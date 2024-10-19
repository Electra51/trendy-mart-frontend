import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { categoryApi } from "./categoryApi"; // Import your categoryApi

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer, // Add categoryApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, categoryApi.middleware), // Add categoryApi middleware
});
