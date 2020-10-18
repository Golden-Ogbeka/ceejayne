var express = require("express");
var router = express.Router();
const {sqlConnection} = require("../config/db");
const fs = require("fs");
const upload = require("../config/multer");
const passport = require("../config/passport");

/* GET users listing. */
//AUTH
//Admin Login POST
router.post("/api/admin/login", (req, res, next) => {
  try {
    passport.authenticate("user", (err, admin) => {
      const {email, password} = req.body;
      if (err) {
        return next(err);
      } else if (!admin) {
        //If email and Password is not correct from the LocalStrategy
        return res.status(401).send("Invalid login details");
      } else {
        // if (req.body.remember == true) {
        //   req.session.cookie.originalMaxAge = 7 * 24 * 60 * 60 * 1000; // Cookie expires after 7 days
        // } else {
        //   req.session.cookie.expires = false; // Cookie expires at end of session
        // }
        req.logIn(admin, (err) => {
          if (err) {
            return next(err);
          }
          //If all checks out fine
          return res.send("Login successful");
        });
      }
    })(req, res, next);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
});

router.get("/api/verifyAdmin", async (req, res, next) => {
  //isAuthenticated is a passport method
  if (req.isAuthenticated()) {
    try {
      const query = `SELECT * FROM admin WHERE email= "${req.user.email}"`;
      sqlConnection.query(query, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
          req.logout();
          return res.status(401).send("Access Denied");
        }
      });
      return res.send(true);
      //If user is logged in, continue
    } catch (e) {
      return res.status(500).send("Server Error");
    }
  } else {
    return res.status(401).send("Login to continue");
  }
});

//Verify Authentications
const verifyAdmin = async (req, res, next) => {
  //isAuthenticated is a passport method
  if (req.isAuthenticated()) {
    try {
      const query = `SELECT * FROM admin WHERE email= "${req.user.email}"`;
      sqlConnection.query(query, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
          req.logout();
          return res.status(401).send("Access Denied");
        }
      });
      next();

      //If user is logged in, continue
    } catch (e) {
      return res.status(500).send("Server Error");
    }
  } else {
    return res.status(401).send("Login to continue");
  }
};

router.post("/api/admin/logout", verifyAdmin, async (req, res) => {
  try {
    req.logout();
    return res.send("Logged out");
  } catch (error) {
    return res.status(500).send("Server Error");
  }
});
router.post(
  "/api/admin/product/new",
  [upload.single("productImage"), verifyAdmin],
  async (req, res) => {
    const {name, shop, shopSection, description, price} = req.body;
    const productImage = req.file;
    if (!productImage) {
      return res.status(404).send("Invalid Product Image");
    }
    const productImagePath = "product_images/" + productImage.filename;
    try {
      const query = `INSERT INTO products (name, shop, shopSection, description, price, image) VALUES  (?,?,?,?,?,?)`;
      const params = [
        name,
        shop,
        shopSection,
        description,
        price,
        productImagePath,
      ];
      sqlConnection.beginTransaction(
        query,
        params,
        {prepare: true},
        (err, result) => {
          if (err) throw err;
        }
      );
      return res.send("Product Added");
    } catch (error) {
      console.log(error);
      return res.status(500).send("Server Error");
    }
  }
);

router.put(
  "/api/admin/product/:productID",
  [upload.single("productImage"), verifyAdmin],
  async (req, res) => {
    const {productID} = req.params;
    let query = "";
    const {name, shop, shopSection, description, price} = req.body;
    let productImagePath = "";
    try {
      query = `SELECT * FROM products WHERE ID= "${productID}"`;
      sqlConnection.query(query, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
          return res.status(400).send("Product not found");
        }
        productImagePath = result[0].image;
        query = `UPDATE products SET name= '${name}', shop='${shop}' , shopSection='${shopSection}', description='${description}', price='${price}' WHERE ID='${productID}'`;
        sqlConnection.query(query, (err, result) => {
          if (err) throw err;
          if (req.file) {
            const currentImage = "uploads/" + productImagePath;
            fs.unlink(currentImage, (err) => {
              if (err && err.code === "ENOENT") {
                console.log(err);
              } else if (err) throw err;
            });
            productImagePath = "product_images/" + req.file.filename;
            query = `UPDATE products SET image = '${productImagePath}' WHERE ID='${productID}' `;
            sqlConnection.query(query, (err, result) => {
              if (err) throw err;
            });
          }
          return res.send("Product Updated");
        });
      });
    } catch (error) {
      return res.status(500).send("Server Error");
    }
  }
);

router.delete("/api/admin/product/:ID", verifyAdmin, async (req, res) => {
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
