import { Home } from "../compornents/pages/Home";
import { Page404 } from "../compornents/pages/Page404";
import { Setting } from "../compornents/pages/Setting";
import { UserManagement } from "../compornents/pages/UserManagemant";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "/*",
    exact: false,
    children: <Page404 />
  }
];
