import mongoose from "mongoose";
// Not added the subscription count feature
const schema = new mongoose.Schema({
  users: {
    type: Number,
    default: 0,
  },

  views: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Stats = mongoose.model("Stats", schema);
