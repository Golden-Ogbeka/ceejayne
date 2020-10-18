import Axios from "axios";
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
import {useHistory} from "react-router-dom";

const AdminNav = () => {
  const history = useHistory();
  const logout = async () => {
    try {
      if (window.confirm("Are you sure you want to logout?")) {
        const response = await Axios.post("/api/admin/logout");
        alert(response.data);
        history.push("/admin/login");
      }
    } catch (error) {
      alert(error.response.data);
    }
  };
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
                <MDBDropdownItem href="/admin/products/all">
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
          <MDBNavItem>
            <MDBNavLink to="#!" className="text-white" onClick={() => logout()}>
              <MDBIcon icon="sign-out-alt" className="mr-1" />
              Logout
            </MDBNavLink>
          </MDBNavItem>
        </MDBBtnGroup>
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

export default AdminNav;
