import React from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "react-scroll-to-top";
import router from "./Routes/Routes";
const App = () => {
  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
      <ScrollToTop smooth color="#6f00ff" />
    </div>
  );
};

export default App;
