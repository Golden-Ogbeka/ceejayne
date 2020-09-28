import Axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdbreact";
import React, {useState} from "react";

const AdminLogin = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const {email, password} = input;

  const updateInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/admin/login", input);
      alert("logged in");
    } catch (error) {
      alert("Couldnt login");
    }
  };
  return (
    <div className="wrapper">
      <div className="d-flex justify-content-center">
        <MDBCard style={{width: "30rem"}}>
          <MDBCardImage src={require("../img/logo.png")} />
          <MDBCardHeader>
            <h3 className="text-center">Admin Login</h3>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12">
                  <form onSubmit={(e) => submitForm(e)}>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        required
                        name="email"
                        value={email}
                        onChange={(e) => updateInput(e)}
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        required
                        name="password"
                        value={password}
                        onChange={(e) => updateInput(e)}
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn type="submit" color="danger">
                        Login
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default AdminLogin;
