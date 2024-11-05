import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthLayout from "./components/AuthLayout";
import Profile from "./components/Profile";
import EditDetails from "./components/EditDetails";
import Landing from "./pages/Landing";
import Committee from "./components/Committee";
import Contacts from "./components/Contacts";
import Guide from "./components/Guide";
import WorldMap from "./components/WorldMap";
import Gallery from "./components/Gallery";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      <AuthLayout>
        <App />
      </AuthLayout>
    ),
    children: [
      {
        path: "/",
        element: (
          <AuthLayout>
            <Profile />
          </AuthLayout>
        ),
      },
      {
        path: "/edit",
        element: (
          <AuthLayout>
            <EditDetails />
          </AuthLayout>
        ),
      },
    ],
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/committee/:id",
    element: <Committee />,
  },
  {
    path: "/contact",
    element: <Contacts />,
  },
  {
    path: "/guide",
    element: <Guide />,
  },
  {
    path: "/worldmap",
    element: <WorldMap />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

