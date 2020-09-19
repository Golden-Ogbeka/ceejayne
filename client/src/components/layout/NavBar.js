import React, {useState} from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";

import Logo from "../../logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <MDBNavbar id="navBar" color="transparent " dark expand="md">
        <MDBNavbarBrand>
          <img src={Logo} height="60" alt="Ceejayne" />
        </MDBNavbarBrand>
        <MDBNavbarToggler className="btn-dark" onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <div className="btn-group">
              <MDBNavItem active>
                <MDBNavLink
                  to="/"
                  className="btn btn-outline-dark text-dark btn-lg">
                  <MDBIcon icon="home" className="mr-1" />
                  Home
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/about"
                  className="btn btn-outline-dark text-dark btn-lg">
                  <MDBIcon far icon="question-circle" className="mr-1" />
                  About
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    nav
                    caret
                    className="btn btn-outline-dark text-dark btn-lg">
                    <span className="mr-2">
                      <MDBIcon icon="shopping-basket" className="mr-1" />
                      Shop
                    </span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/shop/nails">Nails</MDBDropdownItem>
                    <MDBDropdownItem href="/shop/hairs">Hairs</MDBDropdownItem>
                    <MDBDropdownItem href="/shop/clothing">
                      Clothing
                    </MDBDropdownItem>
                    <MDBDropdownItem href="/shop/bags">Bags</MDBDropdownItem>
                    <MDBDropdownItem href="/shop/makeup">
                      Makeup
                    </MDBDropdownItem>
                    <MDBDropdownItem href="/shop/tools">
                      Tools & Equipments
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/services"
                  className="btn btn-outline-dark text-dark btn-lg">
                  <MDBIcon icon="award" className="mr-1" />
                  Services
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/contact"
                  className="btn btn-outline-dark text-dark btn-lg">
                  <MDBIcon icon="phone" className="mr-1" />
                  Contact
                </MDBNavLink>
              </MDBNavItem>
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </React.Fragment>
  );
};

export default NavBar;
