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
import React from "react";

const Shop = () => {
  return (
    <div className="wrapper">
      <p className="text-center h3 pb-3">Shop</p>
      <MDBContainer>
        <MDBCardGroup>
          <MDBCard>
            <MDBLink to="/shop/hairs">
              <MDBCardImage
                src={require("../../img/shop/ceejayne-hair.jpg")}
                alt="Hairs"
                className="img-fluid"
              />
            </MDBLink>
            <MDBCardHeader className="p-1">
              <MDBLink className="h3 text-danger text-center" to="/shop/hairs">
                Hairs
              </MDBLink>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup>
                <MDBListGroupItem>
                  Closures: 4x4, Frontal(13x5), 360(All round)
                </MDBListGroupItem>
                <MDBListGroupItem>Virgin Human Hair</MDBListGroupItem>
                <MDBListGroupItem>Synthetic</MDBListGroupItem>
                <MDBListGroupItem>Human Hair Blend</MDBListGroupItem>
                <MDBListGroupItem>Wigs</MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
            <MDBCardFooter>
              <MDBLink to="/shop/hairs" className="btn btn-outline-black">
                View Hair Products
              </MDBLink>
            </MDBCardFooter>
          </MDBCard>
          <MDBCard>
            <MDBLink to="/shop/clothing">
              <MDBCardImage
                src={require("../../img/shop/ceejayne-clothing.jpg")}
                alt="Clothing"
                className="img-fluid"
              />
            </MDBLink>
            <MDBCardHeader className="p-1">
              <MDBLink
                className="h3 text-danger text-center"
                to="/shop/clothing">
                Clothing
              </MDBLink>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup>
                <MDBListGroupItem>Polos/Tops</MDBListGroupItem>
                <MDBListGroupItem>Shirts</MDBListGroupItem>
                <MDBListGroupItem>Skirts</MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
            <MDBCardFooter>
              <MDBLink to="/shop/clothing" className="btn btn-outline-black">
                View Clothing Products
              </MDBLink>
            </MDBCardFooter>
          </MDBCard>
          <MDBCard>
            <MDBLink to="/shop/bags">
              <MDBCardImage
                src={require("../../img/shop/ceejayne-bags.jpg")}
                alt="Bags"
                className="img-fluid"
              />
            </MDBLink>
            <MDBCardHeader className="p-1">
              <MDBLink className="h3 text-danger text-center" to="/shop/bags">
                Bags
              </MDBLink>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup>
                <MDBListGroupItem>Shoulder Bags (small)</MDBListGroupItem>
                <MDBListGroupItem>Leather Bags (medium-size) </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
            <MDBCardFooter>
              <MDBLink to="/shop/bags" className="btn btn-outline-black">
                View Bags Products
              </MDBLink>
            </MDBCardFooter>
          </MDBCard>
        </MDBCardGroup>
        <MDBCardGroup>
          <MDBCard>
            <MDBLink to="/shop/makeup">
              <MDBCardImage
                alt="Makeup"
                src={require("../../img/shop/ceejayne-makeup.jpg")}
                className="img-fluid"
              />
            </MDBLink>
            <MDBCardHeader className="p-1">
              <MDBLink className="h3 text-danger text-center" to="/shop/makeup">
                Makeup
              </MDBLink>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup>
                <MDBListGroupItem>
                  Eyes: Eyeshadows, Lashes, Eyeshaddow pinner
                </MDBListGroupItem>
                <MDBListGroupItem>
                  Brows: Pencil, Gel, Brow Powder
                </MDBListGroupItem>
                <MDBListGroupItem>
                  Face: Primer, Moisturizer, Toner, Illuminator, Setting powder,
                  powder, Foundation, Concealer
                </MDBListGroupItem>
                <MDBListGroupItem>Cheeks: Blush, Bronzer</MDBListGroupItem>
                <MDBListGroupItem>
                  Lips: Lip GLoss, Matte Lipstick
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
            <MDBCardFooter>
              <MDBLink to="/shop/makeup" className="btn btn-outline-black">
                View Makeup Products
              </MDBLink>
            </MDBCardFooter>
          </MDBCard>
          <MDBCard>
            <MDBLink to="/shop/nails">
              <MDBCardImage
                alt="Nails"
                src={require("../../img/shop/ceejayne-nails.jpeg")}
                className="img-fluid"
              />
            </MDBLink>
            <MDBCardHeader className="p-1">
              <MDBLink className="h3 text-danger text-center" to="/shop/nails">
                Nails
              </MDBLink>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup>
                <MDBListGroupItem>Prenon Nails</MDBListGroupItem>
                <MDBListGroupItem>Basic False Nails</MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
            <MDBCardFooter>
              <MDBLink to="/shop/nails" className="btn btn-outline-black">
                View Nail Products
              </MDBLink>
            </MDBCardFooter>
          </MDBCard>
          <MDBCard>
            <MDBLink to="/shop/tools">
              <MDBCardImage
                alt="Tools"
                src={require("../../img/shop/ceejayne-tools.jpg")}
                className="img-fluid"
              />
            </MDBLink>
            <MDBCardHeader className="p-1">
              <MDBLink className="h3 text-danger text-center" to="/shop/tools">
                Tools & Equipment
              </MDBLink>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup>
                <MDBListGroupItem>Brushes</MDBListGroupItem>
                <MDBListGroupItem>Makeup Purse</MDBListGroupItem>
                <MDBListGroupItem>Makeup Bag</MDBListGroupItem>
                <MDBListGroupItem>Makeup Box</MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
            <MDBCardFooter>
              <MDBLink to="/shop/hairs" className="btn btn-outline-black">
                View Hair Products
              </MDBLink>
            </MDBCardFooter>
          </MDBCard>
        </MDBCardGroup>
      </MDBContainer>
    </div>
  );
};

export default Shop;
