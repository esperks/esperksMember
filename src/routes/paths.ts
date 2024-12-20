// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}
const ROOTS_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: "/login",
};
export const PATH_REGISTRATION = {
  registration: "/registration",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  main: path(ROOTS_DASHBOARD, "/main"),

  user: {
    root: path(ROOTS_DASHBOARD, "/user"),
    create: path(ROOTS_DASHBOARD, "/user/create"),
    list: path(ROOTS_DASHBOARD, "/user/list"),
  },
};
