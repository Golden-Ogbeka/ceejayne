import Contact from "../pages/publicPages/Contact";
import WelcomePage from "../pages/publicPages/WelcomePage";

export const PublicRoutes = [
  {
    path: "/",
    component: WelcomePage,
    exact: true,
  },
  {
    path: "/contact",
    component: Contact,
  },
];
