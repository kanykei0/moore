import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound } from "pages/index";
import { Layout } from "app/Layout/Layout";
import { PATHS } from "utils/Constants/Constants";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        path: PATHS.home,
        element: <Home />,
      },
      {
        path: PATHS.notFound,
        element: <NotFound />,
      },
    ],
  },
]);
