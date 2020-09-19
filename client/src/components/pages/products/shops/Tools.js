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

const Tools = () => {
  const [activeTab, setActiveTab] = useState("Pronom");
  const toggle = (tab) => (e) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <div className="wrapper">
      <center>
        <h1>Tools</h1>
        <hr />
      </center>
      <MDBNav className="nav-justified nav-tabs bg-light">
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Pronom"}
            onClick={toggle("Pronom")}
            role="tab"
            className="text-danger">
            Pronom
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "bfNails"}
            onClick={toggle("bfNails")}
            role="tab"
            className="text-danger">
            Virgin Human Hair
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
      <div className="p-2">
        <MDBTabContent activeItem={activeTab}>
          <MDBTabPane tabId="Pronom" role="tabpanel">
            <p className="mt-2">
              <Products shop="Tools" shopSection="Pronom" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="bfNails" role="tabpanel">
            <p className="mt-2">
              <Products shop="Tools" shopSection="BF Tools" />
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </div>
    </div>
  );
};

export default Tools;
