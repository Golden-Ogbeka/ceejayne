let mysql = require("mysql");
let sqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ceejayne",
});

const InitiateSqlServer = () => {
  try {
    sqlConnection.connect(function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("Connected to Database!");
      }
    });
  } catch (e) {
    console.error(e.message);
    //Exit process with failure
    process.exit(1);
  }
  // sqlConnection.end();
};

module.exports = {InitiateSqlServer, sqlConnection};
