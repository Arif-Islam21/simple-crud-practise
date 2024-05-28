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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Root></Root>,
        loader: () => fetch("http://localhost:5000/mangoData"),
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
