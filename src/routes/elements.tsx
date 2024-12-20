import { Suspense, lazy, ElementType } from "react";
// components
import LoadingScreen from "../components/loading-screen";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------
export const LoginPage = Loadable(lazy(() => import("../pages/LoginPage")));
export const UserCreatePage = Loadable(
  lazy(() => import("../pages/@dashboard/UserCreatePage"))
);
export const UserListPage = Loadable(
  lazy(() => import("../pages/@dashboard/user/userlist/Index"))
);
export const Main = Loadable(lazy(() => import("../pages/PageOne")));
export const Page404 = Loadable(lazy(() => import("../pages/Page404")));
