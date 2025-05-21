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
        index: true,
        Component: Home,
      },
      {
        path: "home",
        Component: Home,
        loader: () =>
          fetch("https://papaya-server.vercel.app/creategroup/ontime"),
      },
      {
        path: "allgroups",
        Component: AllGroups,
        loader: () => fetch("https://papaya-server.vercel.app/creategroup"),
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
          fetch(`https://papaya-server.vercel.app/creategroup/${params.id}`),
      },
      {
        path: "mygroup/update/:id",
        Component: Update,
        loader: ({ params }) =>
          fetch(`https://papaya-server.vercel.app/creategroup/${params.id}`),
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
