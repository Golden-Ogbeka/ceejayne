var express = require("express");
var router = express.Router();
const {sqlConnection} = require("../config/db");
const {route} = require("./userRoutes");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
/* GET users listing. */

router.post("/admin/product/new", async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./uploads";
  form.keepExtensions = true;
  // form.on("fileBegin", function (name, file) {
  //   file.path = path.join("./uploads/" + file.name);
  // });

  // form.on("file", function (name, file) {
  //   console.log("Uploaded " + file.name);
  // });
  form.parse(req, (err, fields, files) => {
    var dir = form.uploadDir;

    var oldName = files.image.path;
    var newName = path.join(dir, files.image.name);
    fs.rename(oldName, newName, () => {
      console.log(`renameed to ${newName}`);
      const {name, shop, shopSection, description, price} = fields;
      const image = files.image.path;
      const query = `INSERT INTO products (name, shop, shopSection, description, price, image) VALUES  (?,?,?,?,?,?)`;
      const params = [name, shop, shopSection, description, price, newName];
      sqlConnection.beginTransaction(
        query,
        params,
        {prepare: true},
        (err, result) => {
          if (err) throw err;
          return res.send("Product Added");
        }
      );
    });
  });
});

router.put("/admin/product/update/:productID", async (req, res) => {
  const {productID} = req.params;
  const query = `UPDATE products SET name= '${name}', shop='${shop}' , shopSection='${shopSection}', description='${description}', price='${price}' WHERE ID=${productID}`;
  sqlConnection.query(query, (err, result) => {
    if (err) throw err;
    return res.send("Product Updated");
  });
});

router.delete("/admin/product/:ID", async (req, res) => {
  const productID = req.params.ID;
  try {
    const query = `DELETE FROM products WHERE ID='${productID}'`;
    sqlConnection.query(query, (err) => {
      if (err) throw err;
      return res.send("Product Deleted");
    });
  } catch (error) {
    return res.status(500).send("Server Error");
  }
});
module.exports = router;
