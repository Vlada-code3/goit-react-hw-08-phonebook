import { lazy } from "react";
const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    isPrivate: false,
    isRestricted: false,
    component: lazy(() => import("../pages/HomePage" /*webpackChankName:'HomePage'*/))
  },
  {
    name: "Contacts",
    path: "/contacts",
    exact: false,
    isPrivate: true,
    isRestricted: false,
    component: lazy(() => import("../pages/ContactsPage" /*webpackChankName:'ContactsPage'*/))
  },

  {
    name: "Registration",
    path: "/registration",
    exact: true,
    isPrivate: false,
    isRestricted: true,
    component: lazy(() => import("../pages/AuthPage" /*webpackChankName:'AuthPage'*/))
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    isPrivate: false,
    isRestricted: true,
    component: lazy(() => import("../pages/AuthPage" /*webpackChankName:'AuthPage'*/))
  }
];

export default mainRoutes;
