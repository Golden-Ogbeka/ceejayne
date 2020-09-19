import React from "react";
import {Route, Switch} from "react-router-dom";
import Bags from "../pages/products/shops/Bags";
import Clothing from "../pages/products/shops/Clothing";
import Hairs from "../pages/products/shops/Hairs";
import Makeup from "../pages/products/shops/Makeup";
import Nails from "../pages/products/shops/Nails";
import Tools from "../pages/products/shops/Tools";

const ShopRoutes = () => {
  return (
    <Switch>
      <Route path="/shop/hairs" component={Hairs} />
      <Route path="/shop/nails" component={Nails} />
      <Route path="/shop/clothing" component={Clothing} />
      <Route path="/shop/bags" component={Bags} />
      <Route path="/shop/makeup" component={Makeup} />
      <Route path="/shop/tools" component={Tools} />
    </Switch>
  );
};

export default ShopRoutes;
