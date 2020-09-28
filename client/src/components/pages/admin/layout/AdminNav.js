import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBBtnGroup,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
} from "mdbreact";
import React from "react";

const AdminNav = () => {
  return (
    <MDBNavbar className="mb-5 nav-justified bg-dark">
      <MDBNavbarNav>
        <MDBBtnGroup>
          <MDBNavItem>
            <MDBNavLink to="/admin/dashboard" className="text-white">
              <MDBIcon icon="home" className="mr-1" />
              Dashboard
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret className="text-white">
                <span className="mr-2">
                  <MDBIcon icon="shopping-basket" className="mr-1" />
                  Products
                </span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem href="/shop/nails">
                  All Products
                </MDBDropdownItem>
                <MDBDropdownItem href="/admin/product/new">
                  Add new product
                </MDBDropdownItem>
                <MDBDropdownItem href="/shop/clothing">
                  View All orders
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBBtnGroup>
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

export default AdminNav;
