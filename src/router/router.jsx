import { createBrowserRouter } from "react-router-dom";

import Products from "../pages/Products";
import Order from "../pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Order />,
  },
]);

export default router;
