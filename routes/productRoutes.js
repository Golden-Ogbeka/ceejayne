var express = require("express");
var router = express.Router();
const {sqlConnection} = require("../config/db");

router.get("/products", async (req, res) => {
  let query = "";
  if (req.query.ID) {
    //get product by ID
    query = `SELECT * FROM products WHERE ID='${req.query.ID}'`;
  } else if (req.query.shop) {
    query = `SELECT * FROM products WHERE shop='${req.query.shop}'`;
  }
  //if no query, then get all products
  else {
    query = `SELECT * FROM products`;
  }
  sqlConnection.query(query, (err, result) => {
    if (err) throw err;
    return res.send(result);
  });
});

module.exports = router;
