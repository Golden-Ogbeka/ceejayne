var express = require("express");
var router = express.Router();
const {sqlConnection} = require("../config/db");

// /* GET home page. */
// router.get("/products", function (req, res, next) {
//   const query = "select * from products";
//   sqlConnection.query(query, (err, result) => {
//     if (err) console.log(err);
//     console.log(result);
//   });
// });

module.exports = router;
