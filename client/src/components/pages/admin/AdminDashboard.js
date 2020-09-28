import Axios from "axios";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBContainer,
  MDBLink,
  MDBListGroup,
  MDBListGroupItem,
  MDBMedia,
  MDBNavLink,
} from "mdbreact";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AdminNav from "./layout/AdminNav";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await Axios.get(`/products`);
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
        await Axios.delete(`/admin/product/${productID}`);
        setProducts(products.filter((product) => product.ID !== productID));
        alert("Product deleted");
      } catch (error) {
        alert("Couldnt delete");
      }
    }
  };
  return (
    <div className="wrapper">
      <p className="text-center h3">Admin Dashboard</p>
      <AdminNav />
      <MDBContainer className="d-flex justify-content-between flex-wrap">
        <MDBListGroup className="scrollableList">
          <p className="lead text-center h5">Your Products</p>
          <div className=" justify-content-center d-flex">
            <Link to="/admin/product/new" className="btn btn-dark btn-sm">
              Add new Product
            </Link>
          </div>
          {products.map((product) => (
            <MDBListGroupItem>
              <MDBMedia>
                <MDBMedia left className="mr-3" href="#">
                  <MDBMedia
                    object
                    src={`http://localhost:5000/${product.image}`}
                    alt="Product Image"
                  />
                </MDBMedia>
                <MDBMedia body>
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
          ))}
        </MDBListGroup>
        <MDBListGroup>
          <p className="text-center h5">Your orders</p>
          <MDBListGroupItem></MDBListGroupItem>
        </MDBListGroup>
      </MDBContainer>
    </div>
  );
};

export default AdminDashboard;
