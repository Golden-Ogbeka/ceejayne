const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const InitiateSqlServer = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
app.use(cors());
app.use(helmet());

InitiateSqlServer();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(
  session({
    secret: "3ec7d14e-8b46-4065-9161-7f6fae3858bd",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(express.static("public"));
app.use("/", [userRoutes, adminRoutes]);

app.listen(5000, () => {
  console.log(`Server listening on port: 5000`);
});
