// import { configureStore } from "@reduxjs/toolkit";
// import { authApi } from "./authApi";
// import { categoryApi } from "./categoryApi"; // Import your categoryApi
// import { productApi } from "./productApi";

// export const store = configureStore({
//   reducer: {
//     [authApi.reducerPath]: authApi.reducer,
//     [categoryApi.reducerPath]: categoryApi.reducer, // Add categoryApi reducer
//     [productApi.reducerPath]: productApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(
//       authApi.middleware,
//       categoryApi.middleware,
//       productApi.middleware
//     ), // Add categoryApi middleware
// });

import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { categoryApi } from "./categoryApi";
import { productApi } from "./productApi";
import cartReducer from "./cartSlice";
import { orderApi } from "./orderApi";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    cart: cartReducer, // Add cart slice to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      categoryApi.middleware,
      productApi.middleware,
      orderApi.middleware
    ),
});
