"use strict";

module.exports = {
  owner: {
    type: String,
    required: true
  },
  description: String,
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    owner: String,
    body: String,
    date: {
      type: Date,
      default: Date.now
    },
    likes: {
      type: Number,
      default: 0
    }
  }],
  created: {
    type: Date,
    default: Date.now
  }
};