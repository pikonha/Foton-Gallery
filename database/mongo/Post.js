module.exports = {
  author_id: String,
  author: String,
  created: { type: Date, default: Date.now },
  description: String,
  likes: { type: Number, default: 0 }
};
