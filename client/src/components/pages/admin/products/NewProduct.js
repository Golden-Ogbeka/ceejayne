import Axios from "axios";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import React, {useState} from "react";
import AdminNav from "../layout/AdminNav";

const NewProduct = () => {
  const [input, setInput] = useState({
    name: "",
    shop: "",
    shopSection: "",
    description: "",
    price: "",
    image: "",
  });
  const {name, shop, shopSection, description, price, image} = input;

  const updateInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("image", image);
    form.append("name", name);
    form.append("shop", shop);
    form.append("shopSection", shopSection);
    form.append("description", description);
    form.append("price", price);
    try {
      const response = await Axios.post("/admin/product/new", form);
      alert("Added");
    } catch (error) {
      alert("Couldnt add");
    }
  };
  return (
    <div className="wrapper">
      <p className="text-center h3">New Product</p>
      <AdminNav />
      <p className="text-center h5">
        Enter the Product's Details in the form below
      </p>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form onSubmit={(e) => submitForm(e)} enctype="multipart/form-data">
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
                  onChange={(e) => updateInput(e)}
                  required>
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
                  onChange={(e) => updateInput(e)}
                  required>
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
                <label htmlFor="image">Product Image</label>
                <br />
                <input
                  type="file"
                  id="image"
                  aria-describedby="image"
                  required
                  name="image"
                  onChange={(e) =>
                    setInput({...input, image: e.target.files[0]})
                  }
                  accept="image/png, image/jpeg"
                />
              </div>
              <hr />
              <div className="text-center">
                <MDBBtn type="submit" color="danger" block>
                  <h4>Add Product</h4>
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default NewProduct;
