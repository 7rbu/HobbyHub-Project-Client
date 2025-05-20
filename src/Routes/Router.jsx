import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Home from "../pages/Home";
import AllGroups from "../pages/AllGroups";
import CreateGroup from "../pages/CreateGroup";
import MyGroup from "../pages/MyGroup";
import PrivetRoutes from "./../PrivetRoutes/PrivetRoutes";

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
        loader: () => fetch("http://localhost:3000/creategroup"),
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
]);

export default router;
