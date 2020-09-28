import {
  MDBContainer,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBTabContent,
  MDBTabPane,
} from "mdbreact";
import React, {useState} from "react";
import Products from "../layout/Products";

const Clothing = () => {
  const [activeTab, setActiveTab] = useState("Polos/Tops");
  const toggle = (tab) => (e) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <div className="wrapper">
      <center>
        <h1>Clothing</h1>
        <hr />
      </center>
      <MDBNav className="nav-justified nav-tabs bg-dark">
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Polos/Tops"}
            onClick={toggle("Polos/Tops")}
            role="tab"
            className="text-danger">
            Polos/Tops
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Shirts"}
            onClick={toggle("Shirts")}
            role="tab"
            className="text-danger">
            Shirts
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Skirts"}
            onClick={toggle("Skirts")}
            role="tab"
            className="text-danger">
            Skirts
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
      <div className="p-2">
        <MDBTabContent activeItem={activeTab}>
          <MDBTabPane tabId="Polos/Tops" role="tabpanel">
            <p className="mt-2">
              <Products shop="Clothing" shopSection="Polos/Tops" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Shirts" role="tabpanel">
            <p className="mt-2">
              <Products shop="Clothing" shopSection="Shirts" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Skirts" role="tabpanel">
            <p className="mt-2">
              <Products shop="Clothing" shopSection="Skirts" />
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </div>
    </div>
  );
};

export default Clothing;
