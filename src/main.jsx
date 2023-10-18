import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import MainHome from "./components/Home/MainHome.jsx/MainHome";
import CreateBrand from "./components/Home/Brands/CreateBrand";
import AddProduct from "./Pages/AddProduct/AddProduct";
import BrandDetails from "./components/BrandDetails/BrandDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <MainHome></MainHome>,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);