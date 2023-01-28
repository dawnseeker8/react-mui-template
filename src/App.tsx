import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Callback from "./components/Callback";
import Dashboard from "./pages/dashboard/Dashboard";
import ErrorPage from "./pages/errors";
import HomePage from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/callback",
      element: <Callback />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
