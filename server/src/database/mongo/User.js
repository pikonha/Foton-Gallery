import mongoose from "mongoose";
import "mongoose-type-email";

module.exports = {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: { type: String, required: true },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
    unique: true
  }
};
