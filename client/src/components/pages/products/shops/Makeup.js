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

const Makeup = () => {
  const [activeTab, setActiveTab] = useState("Eyes");
  const toggle = (tab) => (e) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <div className="wrapper">
      <center>
        <h1>Makeup</h1>
        <hr />
      </center>
      <MDBNav className="nav-justified nav-tabs bg-dark">
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Eyes"}
            onClick={toggle("Eyes")}
            role="tab"
            className="text-danger">
            Eyes
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Brows"}
            onClick={toggle("Brows")}
            role="tab"
            className="text-danger">
            Brows
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Face"}
            onClick={toggle("Face")}
            role="tab"
            className="text-danger">
            Face
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Cheeks"}
            onClick={toggle("Cheeks")}
            role="tab"
            className="text-danger">
            Cheeks
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeTab === "Lips"}
            onClick={toggle("Lips")}
            role="tab"
            className="text-danger">
            Lips
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
      <div className="p-2">
        <MDBTabContent activeItem={activeTab}>
          <MDBTabPane tabId="Eyes" role="tabpanel">
            <p className="mt-2">
              <Products shop="Makeup" shopSection="Eyes" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Brows" role="tabpanel">
            <p className="mt-2">
              <Products shop="Makeup" shopSection="Brows" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Face" role="tabpanel">
            <p className="mt-2">
              <Products shop="Makeup" shopSection="Face" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Cheeks" role="tabpanel">
            <p className="mt-2">
              <Products shop="Makeup" shopSection="Cheeks" />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="Lips" role="tabpanel">
            <p className="mt-2">
              <Products shop="Makeup" shopSection="Lips" />
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </div>
    </div>
  );
};

export default Makeup;
