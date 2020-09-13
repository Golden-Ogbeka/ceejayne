let mysql = require("mysql");
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

const InitiateSqlServer = async () => {
  try {
    await con.connect(function (err) {
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
  con.end();
};
module.exports = InitiateSqlServer;
