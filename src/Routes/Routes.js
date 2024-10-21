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
import ProductPage from "../Pages/ProductPage/ProductPage";
import UserDashboard from "../Pages/UserDashboardPage/UserDashboard";
import UserOrderPage from "../Pages/UserDashboardPage/UserOrderPage/UserOrderPage";
import OrderMenuPage from "../Pages/AdminDashboardPage/OrderMenuPage/OrderMenuPage";
import AdminRoute from "./AdminRoute";

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
      {
        path: "/products",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/user-dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/user-dashboard",
        element: <UserDashboard />,
      },
      {
        path: "/user-dashboard/orders",
        element: <UserOrderPage />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: (
      <AdminRoute>
        {" "}
        <DashboardLayout />
      </AdminRoute>
    ),
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/admin-dashboard",
        element: (
          <AdminRoute>
            {" "}
            <AdminDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/admin-dashboard/products",
        element: (
          <AdminRoute>
            {" "}
            <ProductsPage />
          </AdminRoute>
        ),
      },
      {
        path: "/admin-dashboard/categories",
        element: (
          <AdminRoute>
            {" "}
            <CategoriesPage />
          </AdminRoute>
        ),
      },
      {
        path: "/admin-dashboard/orders",
        element: (
          <AdminRoute>
            {" "}
            <OrderMenuPage />
          </AdminRoute>
        ),
      },
      {
        path: "/admin-dashboard/profile",
        element: (
          <AdminRoute>
            {" "}
            <Profile />
          </AdminRoute>
        ),
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
