import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import MainHome from "./components/Home/MainHome.jsx/MainHome";
import CreateBrand from "./components/Home/Brands/CreateBrand";
import AddProduct from "./Pages/AddProduct/AddProduct";
import BrandDetails from "./components/BrandDetails/BrandDetails";
import Error from "./Pages/Error/Error";
import CarDetails from "./components/CarDetails/CarDetails";
import MyCart from "./Pages/MyCart/MyCart";
import CarUpdate from "./Pages/CarUpdate/CarUpdate";
import Login from "./Pages/Login/Login";
import AuthProvider from "./AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <MainHome></MainHome>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/createbrand",
        element: <CreateBrand></CreateBrand>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/detailsbrand/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brands/${params.id}`),
      },
      {
        path: "/cardetails/:id",
        element: <CarDetails></CarDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`),
      },
      {
        path: "/updatecar/:id",
        element: <CarUpdate></CarUpdate>,
        loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`),
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/carts"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
