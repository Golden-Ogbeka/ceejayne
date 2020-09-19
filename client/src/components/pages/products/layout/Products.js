import React from "react";
import Axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBTooltip,
} from "mdbreact";

const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const getProducts = async () => {
      let response = "";
      if (props.section) {
        response = await Axios.get(`/products?shop=${props.section}`);
      }
      if (props.id) {
        response = await Axios.get(`/products?id=${props.id}`);
      }
      const allProducts = response.data;
      setProducts(allProducts);
    };
  }, []);
  return (
    <React.Fragment>
      {products.length > 0 ? (
        <MDBRow>
          {products.map((product) => (
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard cascade narrow ecommerce>
                <MDBCardImage
                  cascade
                  src={product.image}
                  top
                  alt="Product Image"
                  overlay="white-slight"
                />
                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle>
                    <h5>
                      <a
                        href={`/shop/product/${product._id}`}
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
                  <MDBCardText>Shop Section: {product.shopSection}</MDBCardText>
                  <MDBCardText>{product.description}</MDBCardText>
                  <hr />
                  <MDBCardText className="px-1" showControls>
                    <span className="float-left font-weight-bold">
                      <h5>NGN {product.price}</h5>
                    </span>
                    <span className="float-right">
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-shopping-cart mr-3 fa-lg" />
                        <span>Add to Cart</span>
                      </MDBTooltip>
                    </span>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      ) : (
        <p className="lead">No product(s) found</p>
      )}
    </React.Fragment>
  );
};

export default Products;
