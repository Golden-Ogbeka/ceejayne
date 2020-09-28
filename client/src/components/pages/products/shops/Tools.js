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
  const [activeTab, setActiveTab] = useState("Brushes");
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
      <MDBNav className="nav-justified nav-tabs bg-dark">
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Brushes"}
            onClick={toggle("Brushes")}
            role="tab"
            className="text-danger">
            Brushes
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Makeup Purse"}
            onClick={toggle("Makeup Purse")}
            role="tab"
            className="text-danger">
            Makeup Purse
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Makeup Bag"}
            onClick={toggle("Makeup Bag")}
            role="tab"
            className="text-danger">
            Makeup Bag
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Makeup Box"}
            onClick={toggle("Makeup Box")}
            role="tab"
            className="text-danger">
            Makeup Box
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
      <div className="p-2">
        <MDBTabContent activeItem={activeTab}>
          <MDBTabPane tabId="Brushes" role="tabpanel">
            <p className="mt-2">
              <Products shop="Tools" shopSection="Brushes" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Makeup Purse" role="tabpanel">
            <p className="mt-2">
              <Products shop="Tools" shopSection="Makeup Purse" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Makeup Bag" role="tabpanel">
            <p className="mt-2">
              <Products shop="Tools" shopSection="Makeup Bag" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Makeup Box" role="tabpanel">
            <p className="mt-2">
              <Products shop="Tools" shopSection="Makeup Box" />
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </div>
    </div>
  );
};

export default Tools;
