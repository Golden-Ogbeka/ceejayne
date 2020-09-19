import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
  MDBBox,
} from "mdbreact";
const WelcomePage = () => {
  return (
    <React.Fragment>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 welcomeCarousel"
        onHoverStop>
        <MDBCarouselInner onHoverStop>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={require("../img/welcomePage/1.jpg")}
                alt="Make-up"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Make-up</h3>
              <p>Eyes, Brows, Lips, etc.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={require("../img/welcomePage/2.jpg")}
                alt="Hair"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Hair</h3>
              <p>Closure, Virgin, Synthetic, Wigs, etc.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={require("../img/welcomePage/3.jpg")}
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Nails and many more </h3>
              <p>Tools, Bags, Clothing etc</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <MDBContainer>
        <section className="text-center my-5" id="bestseller">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Bestsellers
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            Trending Products
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard cascade narrow ecommerce>
                <MDBCardImage
                  cascade
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                />
                <MDBCardBody cascade className="text-center">
                  <a href="#!" className="grey-text">
                    <h5>Denim</h5>
                  </a>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Denim trousers</a>
                    </strong>
                  </MDBCardTitle>
                  <MDBBox display="inline">
                    <MDBIcon icon="star" />
                    <MDBIcon icon="star" />
                    <MDBIcon icon="star" />
                    <MDBIcon icon="star" />
                    <MDBIcon far icon="star" />
                  </MDBBox>

                  <MDBCardText>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                  </MDBCardText>
                  <hr />
                  <MDBCardText className="px-1" showControls>
                    <span className="float-left font-weight-bold">
                      <h5>NGN 49</h5>
                    </span>
                    <span className="float-right">
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-shopping-cart mr-3 fa-lg" />
                        <span>Add to Cart</span>
                      </MDBTooltip>
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-share-alt mr-3 fa-lg" />
                        <span>Share</span>
                      </MDBTooltip>
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-heart fa-lg" />
                        <span>Add to Whishlist</span>
                      </MDBTooltip>
                    </span>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
        <section className="text-center my-5" id="newProducts">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            New Products
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            Recent releases
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard cascade narrow ecommerce>
                <MDBCardImage
                  cascade
                  src={require("../img/welcomePage/1.jpg")}
                  top
                  alt="sample photo"
                  overlay="white-slight"
                />
                <MDBCardBody cascade className="text-center">
                  <a href="#!" className="grey-text">
                    <h5>Denim</h5>
                  </a>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Denim trousers</a>
                    </strong>
                  </MDBCardTitle>
                  <MDBBox display="inline">
                    <MDBIcon icon="star" />
                    <MDBIcon icon="star" />
                    <MDBIcon icon="star" />
                    <MDBIcon icon="star" />
                    <MDBIcon far icon="star" />
                  </MDBBox>

                  <MDBCardText>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                  </MDBCardText>
                  <hr />
                  <MDBCardText className="px-1" showControls>
                    <span className="float-left font-weight-bold">
                      <h5>NGN 49</h5>
                    </span>
                    <span className="float-right">
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-shopping-cart mr-3 fa-lg" />
                        <span>Add to Cart</span>
                      </MDBTooltip>
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-share-alt mr-3 fa-lg" />
                        <span>Share</span>
                      </MDBTooltip>
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-heart fa-lg" />
                        <span>Add to Whishlist</span>
                      </MDBTooltip>
                    </span>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
        <section className="text-center my-5" id="promotions">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Promotions
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            Featured Products
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard cascade narrow ecommerce>
                <MDBCardImage
                  cascade
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
                  top
                  alt="sample photo"
                  overlay="white-slight"
                />
                <MDBCardBody cascade className="text-center">
                  <a href="#!" className="grey-text">
                    <h5>Denim</h5>
                  </a>
                  <MDBCardTitle>
                    <strong>
                      <a href="#!">Denim trousers</a>
                    </strong>
                  </MDBCardTitle>
                  <MDBBox display="inline">
                    <MDBIcon icon="star" />
                    <MDBIcon icon="star" />
                    <MDBIcon icon="star" />
                    <MDBIcon icon="star" />
                    <MDBIcon far icon="star" />
                  </MDBBox>

                  <MDBCardText>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                  </MDBCardText>
                  <hr />
                  <MDBCardText className="px-1" showControls>
                    <span className="float-left font-weight-bold">
                      <h5>NGN 49</h5>
                    </span>
                    <span className="float-right">
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-shopping-cart mr-3 fa-lg" />
                        <span>Add to Cart</span>
                      </MDBTooltip>
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-share-alt mr-3 fa-lg" />
                        <span>Share</span>
                      </MDBTooltip>
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-heart fa-lg" />
                        <span>Add to Whishlist</span>
                      </MDBTooltip>
                    </span>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </React.Fragment>
  );
};

export default WelcomePage;
