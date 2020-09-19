import React from "react";
import "./App.css";
import "fontsource-roboto";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import PublicRoutes from "./components/routes/PublicRoutes";
import ShopRoutes from "./components/routes/ShopRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <PublicRoutes />
      <ShopRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
