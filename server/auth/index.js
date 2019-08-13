const jwt = require("jsonwebtoken");

const validate = async (ctx, next) => {
  if (ctx.state.user) {
    ctx.user = await ctx.db.User.findById(ctx.state.user._id);
  } else {
    ctx.user = null;
  }
  return next();
};

const generateToken = async data => jwt.sign(data, process.env.JWT_SECRET);

module.exports = {
  validate,
  generateToken
};
