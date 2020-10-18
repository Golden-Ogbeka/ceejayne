import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";
import React from "react";

import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="wrapper">
      <center>
        <MDBCard className="d-flex" style={{width: "30rem"}}>
          <MDBCardBody>
            <MDBCardTitle>
              <h3> Page Not found</h3>
            </MDBCardTitle>
            <MDBCardText>
              The page you are looking for isn't on this site. <br />
              Please verify the address you entered or click the button below
            </MDBCardText>
            <MDBBtn href="/" color="dark">
              Go to homepage
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </center>
    </div>
  );
};

export default PageNotFound;
