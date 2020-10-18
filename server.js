const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const {InitiateSqlServer} = require("./config/db");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const passport = require("passport");

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
    saveUninitialized: true,
    resave: false,
  })
);

//Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

//Global Variables
app.use((req, res, next) => {
  //res.locals creats global variables
  res.locals.user = req.user || null;
  next();
});

app.use(express.static("uploads"));
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/", [userRoutes, adminRoutes, productRoutes]);

app.listen(5000, () => {
  console.log(`Server listening on port: 5000`);
});
