import React from "react";
import {Route, Switch} from "react-router-dom";
import Services from "../pages/services/Services";

const ServicesRoutes = () => {
  return (
    <Switch>
      <Route path="/services" component={Services} />
    </Switch>
  );
};

export default ServicesRoutes;
