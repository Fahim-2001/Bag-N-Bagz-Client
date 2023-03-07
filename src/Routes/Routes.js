import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Collections from "../Pages/Collections/Collections/Collections";
import SingleProductDetails from "../Pages/Collections/SingleProduct/SingleProductDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginAndRegistration/Login/Login";
import Registration from "../Pages/LoginAndRegistration/Registration/Registration";
import PageNotFound from "../Pages/Shared/PageNotFound/PageNotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/collections",
        element: <Collections></Collections>,
      },
      {
        path: "/productDetails/:productId",
        loader: async ({ params }) => {
          return await fetch(`http://localhost:5000/bags/${params.productId}`);
        },
        element: <SingleProductDetails></SingleProductDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default routes;
