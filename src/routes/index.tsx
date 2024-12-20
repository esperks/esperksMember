import { Navigate, useRoutes } from "react-router-dom";
// auth
import AuthGuard from "../auth/AuthGuard";
import GuestGuard from "../auth/GuestGuard";
// layouts
import CompactLayout from "../layouts/compact";
import DashboardLayout from "../layouts/dashboard";
// config
import { PATH_AFTER_LOGIN, PATH_BEFORE_LOGIN } from "../config";
//
import {
  Page404,
  LoginPage,
  UserListPage,
  UserCreatePage,
  Main,
} from "./elements";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <Navigate to={PATH_BEFORE_LOGIN} replace />, index: true },
        {
          path: "login",
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: "/",
      children: [
        {
          element: <Navigate to="/dashboard/user/create" replace />,
          index: true,
        },
        {
          path: "registration",
          element: (
            <GuestGuard>
              <UserCreatePage />
            </GuestGuard>
          ),
        },
      ],
    },

    {
      path: "/dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: "main", element: <Main /> },
        {
          path: "user",
          children: [
            {
              element: <Navigate to="/dashboard/user/create" replace />,
              index: true,
            },
            { path: "create", element: <UserCreatePage /> },
            { path: "list", element: <UserListPage /> },
            // { path: "six", element: <PageSix /> },
          ],
        },
      ],
    },
    {
      element: <CompactLayout />,
      children: [{ path: "404", element: <Page404 /> }],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
