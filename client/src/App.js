import React from "react";
import "./App.css";
import "fontsource-roboto";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import {PublicRoutes} from "./components/routes/PublicRoutes";
import {ShopRoutes} from "./components/routes/ShopRoutes";
import {AdminRoutes} from "./components/routes/AdminRoutes";
import {ServicesRoutes} from "./components/routes/ServicesRoutes";
import AdminPrivateRoute from "./components/routes/auth/AdminPrivateRoute";
import PageNotFound from "./components/pages/PageNotFound";
import AdminProtectedRoute from "./components/routes/auth/AdminProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {AdminRoutes.map((route) =>
          route.private ? (
            <AdminPrivateRoute {...route} />
          ) : route.protected ? (
            <AdminProtectedRoute {...route} />
          ) : (
            <Route {...route} />
          )
        )}
        {PublicRoutes.map((route) => (
          <Route {...route} />
        ))}
        {ShopRoutes.map((route) => (
          <Route {...route} />
        ))}
        {ServicesRoutes.map((route) => (
          <Route {...route} />
        ))}
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
