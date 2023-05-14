import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReviewOrder from "./Layout/ReviewOrder";
import Home from "./Layout/Home";
import Login from "./Layout/Login";
import Inventory from "./Layout/Inventory";
import Card from "./Components/Shop/Card/Card";
import LoaderData from "../src/LoaderData";
import Loading from "./Components/Loading/Loading";
import Procced from "./Layout/Procced";
import Register from "./Layout/Register";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/order",
        element: <Card></Card>,
        loader: () => fetch("http://localhost:5000/totalProducts"),
      },
      {
        path: "/review",
        element: <ReviewOrder />,
        loader: LoaderData,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        ),
      },
      {
        path: "/loading",
        element: <Loading />,
      },
      {
        path: "/proceed",
        element: (
          <PrivateRoute>
            <Procced></Procced>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
