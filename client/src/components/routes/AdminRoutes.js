import React from "react";
import {Route, Switch} from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLogin from "../pages/admin/AdminLogin";
import EditProduct from "../pages/admin/products/EditProduct";
import NewProduct from "../pages/admin/products/NewProduct";

const AdminRoutes = () => {
  return (
    <Switch>
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/product/edit/:productID" component={EditProduct} />
      <Route path="/admin/product/new" component={NewProduct} />
    </Switch>
  );
};

export default AdminRoutes;
