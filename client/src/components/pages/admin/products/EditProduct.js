import Axios from "axios";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import React, {useState, useEffect} from "react";
import AdminNav from "../layout/AdminNav";

const EditProduct = (props) => {
  const {productID} = props.match.params;
  const [input, setInput] = useState({
    name: "",
    shop: "",
    shopSection: "",
    description: "",
    price: "",
    productImage: "",
  });
  const {name, shop, shopSection, description, price, productImage} = input;

  useEffect(() => {
    const getProductInfo = async () => {
      try {
        const response = await Axios.get(`/api/products?ID=${productID}`);
        const {name, shop, shopSection, description, price} = response.data[0];
        setInput({
          name,
          shop,
          shopSection,
          description,
          price,
        });
      } catch (error) {
        setInput({});
      }
    };
    getProductInfo();
  }, []);
  const updateInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("productImage", productImage);
      data.append("name", name);
      data.append("shop", shop);
      data.append("shopSection", shopSection);
      data.append("description", description);
      data.append("price", price);

      const response = await Axios.put(`/api/admin/product/${productID}`, data);
      alert(response.data);
    } catch (error) {
      alert(error.response.data);
    }
  };
  return (
    <div className="wrapper">
      <p className="text-center h3">Edit Product</p>
      <AdminNav />
      <p className="text-center h5">
        Edit the Product's Details in the form below
      </p>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form onSubmit={(e) => submitForm(e)}>
              <div className="grey-text">
                <MDBInput
                  label="Product's Name"
                  group
                  type="text"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => updateInput(e)}
                />
                <label htmlFor="shop">Product's Shop</label>
                <select
                  id="shop"
                  className="browser-default custom-select"
                  name="shop"
                  onChange={(e) => updateInput(e)}>
                  <option value={shop}>{shop}</option>
                  <option value="Bags">Bags</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Hairs">Hairs</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Nails">Nails</option>
                  <option value="Tools">Tools</option>
                </select>
                <label htmlFor="shopSection" className="pt-3">
                  Shop Section
                </label>
                <select
                  id="shopSection"
                  className="browser-default custom-select"
                  name="shopSection"
                  onChange={(e) => updateInput(e)}>
                  <option value={shopSection}>{shopSection}</option>
                  {shop === "Bags" && (
                    <React.Fragment>
                      <option value="Shoulder Bags">Shoulder Bags</option>
                      <option value="Leather Bags">Leather Bags</option>
                    </React.Fragment>
                  )}
                  {shop === "Clothing" && (
                    <React.Fragment>
                      <option value="Polos/Tops">Polos/Tops</option>
                      <option value="Shirts">Shirts</option>
                      <option value="Skirts">Skirts</option>
                    </React.Fragment>
                  )}
                  {shop === "Hairs" && (
                    <React.Fragment>
                      <option value="Closure">Closure</option>
                      <option value="Virgin Human Hair">
                        Virgin Human Hair
                      </option>
                      <option value="Synthetic">Synthetic</option>
                      <option value="Human Hair Blend">Human Hair Blend</option>
                      <option value="Wigs">Wigs</option>
                    </React.Fragment>
                  )}
                  {shop === "Makeup" && (
                    <React.Fragment>
                      <option value="Eyes">Eyes</option>
                      <option value="Brows">Brows</option>
                      <option value="Face">Face</option>
                      <option value="Cheeks">Cheeks</option>
                      <option value="Lips">Wigs</option>
                    </React.Fragment>
                  )}
                  {shop === "Nails" && (
                    <React.Fragment>
                      <option value="Prenom">Prenom</option>
                      <option value="Basic False Nails">
                        Basic False Nails
                      </option>
                    </React.Fragment>
                  )}
                  {shop === "Tools" && (
                    <React.Fragment>
                      <option value="Brushes">Brushes</option>
                      <option value="Makeup Purse">Makeup Purse</option>
                      <option value="Makeup Bag">Makeup Bag</option>
                      <option value="Makeup Box">Makeup Box</option>
                    </React.Fragment>
                  )}
                </select>
                <MDBInput
                  label="Product's Description"
                  group
                  type="textarea"
                  required
                  rows="3"
                  name="description"
                  value={description}
                  onChange={(e) => updateInput(e)}
                />
                <MDBInput
                  label="Price"
                  group
                  type="number"
                  required
                  name="price"
                  value={price}
                  onChange={(e) => updateInput(e)}
                />
              </div>
              <div>
                <label htmlFor="productImage">Product Image (optional)</label>
                <br />
                <input
                  type="file"
                  id="productImage"
                  aria-describedby="productImage"
                  name="productImage"
                  onChange={(e) =>
                    setInput({...input, productImage: e.target.files[0]})
                  }
                  accept="image/png, image/jpeg"
                />
              </div>
              <hr />
              <div className="text-center">
                <MDBBtn type="submit" color="danger" block>
                  <h4>Update Product</h4>
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default EditProduct;
