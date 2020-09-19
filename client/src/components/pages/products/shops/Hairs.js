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

const Hairs = () => {
  const [activeTab, setActiveTab] = useState("Closure");
  const toggle = (tab) => (e) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <div className="wrapper">
      <center>
        <h1>Hairs</h1>
        <hr />
      </center>
      <MDBNav className="nav-justified nav-tabs bg-light">
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Closure"}
            onClick={toggle("Closure")}
            role="tab"
            className="text-danger">
            Closure
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "VirginHair"}
            onClick={toggle("VirginHair")}
            role="tab"
            className="text-danger">
            Virgin Human Hair
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Synthetic"}
            onClick={toggle("Synthetic")}
            role="tab"
            className="text-danger">
            Synthetic
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Human Hair Blend"}
            onClick={toggle("Human Hair Blend")}
            role="tab"
            className="text-danger">
            Human Hair blend
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Wigs"}
            onClick={toggle("Wigs")}
            role="tab"
            className="text-danger">
            Wigs
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
      <div className="p-2">
        <MDBTabContent activeItem={activeTab}>
          <MDBTabPane tabId="Closure" role="tabpanel">
            <p className="mt-2">
              <Products shop="Hairs" shopSection="Closure" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="VirginHair" role="tabpanel">
            <p className="mt-2">
              <Products shop="Hairs" shopSection="Virgin Hair" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Synthetic" role="tabpanel">
            <p className="mt-2">
              <Products shop="Hairs" shopSection="Synthetic" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Human Hair Blend" role="tabpanel">
            <p className="mt-2">
              <Products shop="Hairs" shopSection="Human Hair Blend" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Wigs" role="tabpanel">
            <p className="mt-2">
              <Products shop="Hairs" shopSection="Wigs" />
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </div>
    </div>
  );
};

export default Hairs;
