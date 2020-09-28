import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardGroup,
  MDBCardHeader,
  MDBCardImage,
  MDBContainer,
  MDBLink,
  MDBListGroup,
  MDBListGroupItem,
} from "mdbreact";
const Services = () => {
  return (
    <div className="wrapper">
      <p className="text-center pb-3 h3">Services</p>
      <MDBContainer>
        <MDBCardGroup>
          <MDBCard>
            <MDBLink to="#!">
              <MDBCardImage
                alt="Makeup"
                src={require("../img/services/ceejayne-makeup-services.jpg")}
                className="img-fluid"
              />
            </MDBLink>
            <MDBCardHeader className="p-1">
              <MDBLink className="h3 text-danger text-center" to="#!">
                Makeup
              </MDBLink>
            </MDBCardHeader>
          </MDBCard>
          <MDBCard>
            <MDBLink to="#!">
              <MDBCardImage
                src={require("../img/services/ceejayne-hair-services.jpg")}
                className="img-fluid"
                alt="Salon/Hair"
              />
            </MDBLink>
            <MDBCardHeader className="p-1">
              <MDBLink className="h3 text-danger text-center" to="#!">
                Salon/Hair
              </MDBLink>
            </MDBCardHeader>
          </MDBCard>
          <MDBCard>
            <MDBLink to="#!">
              <MDBCardImage
                src={require("../img/services/ceejayne-nails-services.jpg")}
                className="img-fluid"
                alt="Nails"
              />
            </MDBLink>
            <MDBCardHeader className="p-1">
              <MDBLink className="h3 text-danger text-center" to="#!">
                Nails
              </MDBLink>
            </MDBCardHeader>
          </MDBCard>
        </MDBCardGroup>
      </MDBContainer>
    </div>
  );
};

export default Services;
