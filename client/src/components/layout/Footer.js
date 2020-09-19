import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBox,
  MDBIcon,
} from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="grey darken-4" id="footer" className="pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled">
                <a href="/shop">Shop</a>
              </li>
              <li className="list-unstyled">
                <a href="/services">Services</a>
              </li>
              <li className="list-unstyled">
                <a href="/about">About</a>
              </li>
              <li className="list-unstyled">
                <a href="/contact">Contact</a>
              </li>
              <li className="list-unstyled">
                <b>* 24/7 Customer Support</b>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms & Conditions</a>
              </li>

              <li className="list-unstyled">
                <a href="#!">Help Center</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Return Policy</a>
              </li>
              <li className="list-unstyled">
                <b>* Free Shipping</b>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Trending Products</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Brands</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Deals</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <MDBBox display="inline">
              <img src={require("./icons/visa.png")} height="30px" alt="" />
              <img
                src={require("./icons/master-card.png")}
                height="30px"
                alt=""
              />
              <img src={require("./icons/pay-pal.png")} height="30px" alt="" />
              <img src={require("./icons/verve.png")} height="30px" alt="" />
            </MDBBox>
            <hr />
            <a href="#!" className="fb-ic mr-3">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="#!" className="fb-ic mr-3">
              <MDBIcon fab icon="whatsapp" />
            </a>
            <a href="#!" className="ins-ic mr-3">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="#!" className="tw-ic mr-3">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="#!" className="li-ic mr-3">
              <MDBIcon fab icon="linkedin-in" />
            </a>
            <a href="#!" className="yt-ic mr-3">
              <MDBIcon fab icon="youtube" />
            </a>
            <a href="#!" className="email-ic mr-3">
              <MDBIcon icon="envelope" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br />
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.ceejayne.com">Ceejayne Beauty Parlour</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
