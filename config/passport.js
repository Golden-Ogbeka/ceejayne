const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const {sqlConnection} = require("./db");

//Passport LocalStrategy for user
passport.use(
  "user",
  new LocalStrategy({usernameField: "email"}, function (email, password, done) {
    email = email.toLowerCase(); //Mongodb casing issues
    const query = `SELECT * FROM admin WHERE email= "${email}"`;
    sqlConnection.query(query, (err, result) => {
      if (err) {
        return done(null, false);
      } else if (result.length == 0) {
        return done(null, false);
      } else {
        if (result[0].password == password) {
          //Email and Password matches for email
          return done(null, result[0]);
        } else {
          return done(null, false);
        }
      }
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.email);
});
passport.deserializeUser(function (email, done) {
  const query = `SELECT * FROM admin WHERE email= "${email}"`;
  sqlConnection.query(query, (err, result) => {
    done(err, result[0]);
  });
});

module.exports = passport;
