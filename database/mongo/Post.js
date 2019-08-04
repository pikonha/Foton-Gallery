module.exports = {
  owner: String,
  author: String,
  created: { type: Date, default: Date.now },
  description: String,
  likes: { type: Number, default: 0 },
  tags: [{ type: String }]
};
