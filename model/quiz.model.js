const mongoose = require("mongoose");

const questions = mongoose.Schema({
  title: String,
  answerOptions: { type: [String] },
  correctOptions: { type: [Number] },
});

const quizSchema = mongoose.Schema(
  {
    creator: String,
    title: String,
    description: String,
    questions: { type: [questions] },
  },
  { versionKey: false }
);

const QuizModel = mongoose.model("quiz", quizSchema);

module.exports = { QuizModel };
