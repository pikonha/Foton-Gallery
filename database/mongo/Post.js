const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  author_id: String,
  author: String,
  created: { type: Date, default: Date.now },
  description: String,
  likes: Number
});

module.exports = mongoose.model("Post", PostSchema);
