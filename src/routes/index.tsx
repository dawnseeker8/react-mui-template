import { createBrowserRouter } from "react-router-dom";
import Callback from "../components/Callback";
import Dashboard from "../pages/dashboard";
import ErrorPage from "../pages/errors";
import HomePage from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
]);

export default router;
