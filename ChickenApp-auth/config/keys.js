require('dotenv').config();

module.exports = {
  mongoURI:
    "mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@chickenapp.b33m3.mongodb.net/auth-db?retryWrites=true&w=majority",
  secretOrKey: "secret",
  userRoles: ["user", "manager"],
};
