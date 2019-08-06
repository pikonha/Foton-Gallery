module.exports = {
  owner: { type: String, required: true },
  description: String,
  likes: { type: Number, default: 0 },
  comments: [{ body: String, date: Date }],
  created: { type: Date, default: Date.now }
};
