module.exports = {
  firstName: { type: String, required: true, minlength: 3, maxlength: 50 },
  lastName: { type: String, required: true, minlength: 3, maxlength: 50 },
  username: { type: String, required: true, minlength: 3, maxlength: 50 },
  password: { type: String, required: true, minlength: 3, maxlength: 50 }
};
