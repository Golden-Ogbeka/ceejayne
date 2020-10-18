import React from "react";
import Axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardGroup,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBTooltip,
} from "mdbreact";

const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const getProducts = async () => {
      try {
        let response = "";
        if (props.shop) {
          response = await Axios.get(`/api/products?shop=${props.shop}`);
          console.log(response);
        }
        if (props.id) {
          response = await Axios.get(`/api/products?ID=${props.id}`);
        }
        const allProducts = response.data;
        setProducts(allProducts);
      } catch (error) {
        setProducts([]);
      }
    };
    getProducts();
  }, []);

  return (
    <React.Fragment>
      {products.length > 0 ? (
        <MDBCardGroup column>
          {products.map(
            (product) =>
              product.shopSection === props.shopSection && (
                <MDBCard ecommerce cascade narrow>
                  <MDBCardImage
                    cascade
                    src={`/${product.image}`}
                    top
                    alt="Product Image"
                    overlay="white-slight"
                  />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <h5>
                        <a
                          href={`/shop/product/${product.ID}`}
                          className="danger-text">
                          {product.name}
                        </a>
                      </h5>
                    </MDBCardTitle>
                    <MDBCardText>
                      <a href={`/shop/${product.shop}`}>
                        Shop: <strong>{product.shop}</strong>
                      </a>
                    </MDBCardText>
                    <MDBCardText>
                      Shop Section: {product.shopSection}
                    </MDBCardText>
                    <MDBCardText>{product.description}</MDBCardText>
                    <hr />
                    <MDBCardText className="px-1" showControls>
                      <span className="float-left font-weight-bold">
                        <h5>NGN {product.price}</h5>
                      </span>
                      {/* <span className="float-right">
                        <MDBTooltip domElement placement="top">
                          <i className="grey-text fa fa-shopping-cart mr-3 fa-lg" />
                          <span>Add to Cart</span>
                        </MDBTooltip>
                      </span> */}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              )
          )}
        </MDBCardGroup>
      ) : (
        <p className="lead">No product(s) found</p>
      )}
    </React.Fragment>
  );
};

export default Products;
