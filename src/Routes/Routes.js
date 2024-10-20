import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/SignInPage/Login";
import Register from "../Pages/SignUPPage/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import ProductsPage from "../Pages/AdminDashboardPage/ProductsMenuPage/ProductsPage";
import CategoriesPage from "../Pages/AdminDashboardPage/CategoriesMenuPage/CategoriesPage";
import Profile from "../Pages/AdminDashboardPage/ProfilePage/Profile";
import AdminDashboard from "../Pages/AdminDashboardPage/AdminDashboard/AdminDashboard";
import CartPage from "../Pages/CartPage/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin-dashboard/products",
        element: <ProductsPage />,
      },
      {
        path: "/admin-dashboard/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/admin-dashboard/orders",
        element: <CategoriesPage />,
      },
      {
        path: "/admin-dashboard/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

export default router;
