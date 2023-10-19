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
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Registration from "./Pages/Registration/Registration";

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
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/createbrand",
        element: <CreateBrand></CreateBrand>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRouter>
            <AddProduct></AddProduct>
          </PrivateRouter>
        ),
      },
      {
        path: "/detailsbrand/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brands/${params.id}`),
      },
      {
        path: "/cardetails/:id",
        element: (
          <PrivateRouter>
            <CarDetails></CarDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`),
      },
      {
        path: "/updatecar/:id",
        element: (
          <PrivateRouter>
            <CarUpdate></CarUpdate>
          </PrivateRouter>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRouter>
            <MyCart></MyCart>
          </PrivateRouter>
        ),
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
