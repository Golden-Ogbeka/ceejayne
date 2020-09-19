import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardHeader,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";

const Contact = () => {
  return (
    <div className="wrapper">
      <center>
        <h1>Contact Details</h1>
      </center>
      <MDBContainer>
        <div className="d-flex justify-content-center">
          <MDBCard style={{width: "50rem"}}>
            <MDBCardImage
              src={require("../img/contact-map.jpg")}
              className="img-fluid"
            />
            <MDBCardHeader>
              <h3> Ceejayne Beauty Parlour</h3>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>
                Call/Whatsapp:{" "}
                <a className="text-danger" href="https://wa.me/2349094181853">
                  09094181853
                </a>
              </MDBCardTitle>
              <hr />
              <MDBCardText>
                <p className="lead">
                  <b>Address:</b> Ceejayne Beauty Parlour, Dreamland Plaza,
                  Behind Everyday Supermarket, Peter Odili Road, Port Harcourt
                </p>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Contact;
