const jwt = require("jsonwebtoken");

const validate = async (ctx, next) => {};

const generateToken = async data => jwt.sign(data, process.env.JWT_SECRET);

module.exports = {
  validate,
  generateToken
};
