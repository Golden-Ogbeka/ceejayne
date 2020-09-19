import React from "react";
import {Route, Switch} from "react-router-dom";
import Contact from "../pages/publicPages/Contact";
import WelcomePage from "../pages/publicPages/WelcomePage";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default PublicRoutes;
