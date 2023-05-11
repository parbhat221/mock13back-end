const mongoose = require("mongoose");


const scoreSchema = mongoose.Schema(
  {
    creator_email: String,
    email: String,
    score: Number,

  },
  { versionKey: false }
);

const ScoreModel = mongoose.model("score", scoreSchema);

module.exports = { ScoreModel };
