import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import AddMango from "./Components/AddMango";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import AuthProvider from "./Components/AuthProvider";
import MangoCard from "./Components/MangoCard";
import Root from "./Components/Root";
import UpdateMango from "./Components/UpdateMango";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Root></Root>,
        loader: () =>
          fetch(
            "https://backend-e27uy05xv-arifs-projects-c80db1af.vercel.app/mangoData"
          ),
      },
      {
        path: "/addMango",
        element: <AddMango></AddMango>,
      },
      {
        path: "mangoCard",
        element: <MangoCard></MangoCard>,
      },
      {
        path: "/updateMango/:id",
        element: <UpdateMango></UpdateMango>,
        loader: ({ params }) =>
          fetch(
            `https://backend-e27uy05xv-arifs-projects-c80db1af.vercel.app/mangoData/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
