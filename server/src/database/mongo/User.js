import mongoose from "mongoose";
import "mongoose-type-email";

module.exports = {
  firstName: { type: String, required: true },
  lastName: { type: String },
  username: { type: String, required: true },
  password: { type: String, required: true, minLenght: 6 },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
    unique: true
  }
};
