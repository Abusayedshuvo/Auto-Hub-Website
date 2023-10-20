import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./pages/Root/Root.jsx";
import ErrorPage from "./pages/ErrorPages/ErrorPage";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import AddProduct from "./pages/AddProduct/AddProduct";
import PrivateRoutes from "./pages/Routes/PrivateRoutes";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MyCart from "./pages/MyCart/MyCart";
import Update from "./pages/Update/Update";

const apiURL = "https://server-side-inky.vercel.app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
        loader: ({ params }) => fetch(`${apiURL}/products/${params.id}`),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`${apiURL}/product/${params.id}`),
      },

      {
        path: "/my-cart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
        loader: () => fetch(`${apiURL}/products`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`${apiURL}/product/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
