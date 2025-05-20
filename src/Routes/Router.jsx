import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Home from "../pages/Home";
import AllGroups from "../pages/AllGroups";
import CreateGroup from "../pages/CreateGroup";
import MyGroup from "../pages/MyGroup";
import PrivetRoutes from "./../PrivetRoutes/PrivetRoutes";
import Update from "../pages/Update";
import Details from "../pages/Details";
import ErrorPages from "./../pages/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "home",
        Component: Home,
      },
      {
        path: "allgroups",
        Component: AllGroups,
        loader: () => fetch("http://localhost:3000/creategroup"),
      },
      {
        path: "creategroup",
        element: (
          <PrivetRoutes>
            <CreateGroup></CreateGroup>
          </PrivetRoutes>
        ),
      },
      {
        path: "mygroup",
        element: (
          <PrivetRoutes>
            <MyGroup></MyGroup>
          </PrivetRoutes>
        ),
      },
      {
        path: "allgroups/details/:id",
        Component: Details,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/creategroup/${params.id}`),
      },
      {
        path: "mygroup/update/:id",
        Component: Update,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/creategroup/${params.id}`),
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },

      {
        path: "*",
        Component: ErrorPages,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPages,
  },
]);

export default router;
