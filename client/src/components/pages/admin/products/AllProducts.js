import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

import {
  MDBBtn,
  MDBBtnGroup,
  MDBContainer,
  MDBLink,
  MDBListGroup,
  MDBListGroupItem,
  MDBMedia,
} from "mdbreact";
import Axios from "axios";
import AdminNav from "../layout/AdminNav";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await Axios.get(`/api/products`);
        const allProducts = response.data;
        setProducts(allProducts);
      } catch (error) {
        setProducts([]);
      }
    };
    getProducts();
  }, []);

  const deleteProduct = async (e) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const productID = e.target.dataset.remove;
      try {
        await Axios.delete(`/api/admin/product/${productID}`);
        setProducts(products.filter((product) => product.ID !== productID));
        alert("Product deleted");
      } catch (error) {
        alert(error.response.data);
      }
    }
  };
  return (
    <React.Fragment>
      <div className="wrapper">
        <p className="text-center h3">Admin Dashboard</p>
        <AdminNav />
        <MDBContainer>
          <MDBListGroup>
            <p className="lead text-center h5">Your Products</p>
            <div className=" justify-content-center d-flex">
              <MDBBtnGroup>
                <Link to="/admin/product/new" className="btn btn-dark btn-sm">
                  Add new Product
                </Link>
              </MDBBtnGroup>
            </div>
            {products.length > 0 ? (
              products.map((product) => (
                <MDBListGroupItem>
                  <MDBMedia className="d-flex justify-content-center">
                    <MDBMedia left className="mr-3" href="#!">
                      <MDBMedia
                        object
                        src={`/${product.image}`}
                        alt="Product Image"
                        style={{width: "200px"}}
                      />
                    </MDBMedia>
                    <MDBMedia right>
                      <MDBMedia heading>{product.name}</MDBMedia>
                      Shop: {product.shop}
                      <br />
                      Shop Section: {product.shopSection}
                      <br />
                      Description: {product.description}
                      <br />
                      Price: NGN {product.price}
                    </MDBMedia>
                  </MDBMedia>
                  <hr />
                  <MDBBtnGroup className="d-flex justify-content-center">
                    <MDBLink
                      to={`/admin/product/edit/${product.ID}`}
                      className="btn btn-outline-dark">
                      Edit
                    </MDBLink>
                    <MDBBtn
                      className="btn btn-outline-dark"
                      data-remove={product.ID}
                      onClick={(e) => deleteProduct(e)}>
                      Delete
                    </MDBBtn>
                  </MDBBtnGroup>
                </MDBListGroupItem>
              ))
            ) : (
              <center>
                <p className="lead">No registered product</p>
              </center>
            )}
          </MDBListGroup>
        </MDBContainer>
      </div>
    </React.Fragment>
  );
};
export default AllProducts;
