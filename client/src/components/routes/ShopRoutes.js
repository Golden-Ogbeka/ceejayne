import React from "react";
import {Route, Switch} from "react-router-dom";
import Bags from "../pages/products/shops/Bags";
import Clothing from "../pages/products/shops/Clothing";
import Hairs from "../pages/products/shops/Hairs";
import Makeup from "../pages/products/shops/Makeup";
import Nails from "../pages/products/shops/Nails";
import Shop from "../pages/products/shops/Shop";
import Tools from "../pages/products/shops/Tools";

export const ShopRoutes = [
  {
    path: "/shop",
    component: Shop,
    exact: true,
  },
  {
    path: "/shop/hairs",
    component: Hairs,
  },
  {
    path: "/shop/nails",
    component: Nails,
  },
  {
    path: "/shop/clothing",
    component: Clothing,
  },
  {
    path: "/shop/bags",
    component: Bags,
  },
  {
    path: "/shop/makeup",
    component: Makeup,
  },
  {
    path: "/shop/tools",
    component: Tools,
  },
];
