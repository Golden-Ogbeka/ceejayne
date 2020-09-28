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

const Bags = () => {
  const [activeTab, setActiveTab] = useState("Shoulder Bags");
  const toggle = (tab) => (e) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <div className="wrapper">
      <center>
        <h1>Bags</h1>
        <hr />
      </center>
      <MDBNav className="nav-justified nav-tabs bg-dark">
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Shoulder Bags"}
            onClick={toggle("Shoulder Bags")}
            role="tab"
            className="text-danger">
            Shoulder Bags
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Leather Bags"}
            onClick={toggle("Leather Bags")}
            role="tab"
            className="text-danger">
            Leather Bags
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
      <div className="p-2">
        <MDBTabContent activeItem={activeTab}>
          <MDBTabPane tabId="Shoulder Bags" role="tabpanel">
            <p className="mt-2">
              <Products shop="Bags" shopSection="Shoulder Bags" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Leather Bags" role="tabpanel">
            <p className="mt-2">
              <Products shop="Bags" shopSection="Leather Bags" />
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </div>
    </div>
  );
};

export default Bags;
