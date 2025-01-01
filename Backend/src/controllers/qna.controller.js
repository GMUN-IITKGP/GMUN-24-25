import { User } from "../models/User.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { Question } from "../models/Question.model.js";
import { Answer } from "../models/Answer.model.js";
import ApiError from "../utils/ApiError.js"; // Import the ApiError class

const createQuestion = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const user = req.user;

  if (!title) {
    throw new ApiError(400, "Title is required");
  }

  if (!description) {
    throw new ApiError(400, "Description is required");
  }

  if (!user) {
    throw new ApiError(401, "You need to login to create a question");
  }

  if (user.Role === "Unregistered") {
    throw new ApiError(403, "Only registered users can create questions");
  }

  const question = await Question.create({
    title,
    description,
    user: user._id,
  });

  res.status(201).json(question);
});

const getQuestions = asyncHandler(async (req, res) => {
  const questions = await Question.find()
    .populate({ path: "user", select: "fullName" })
    .populate({
      path: "answers",
      populate: { path: "user", select: "fullName email" },
    });

  res.status(200).json(questions);
});

const getUserQuestions = asyncHandler(async (req, res) => {
  const user = req.user;

  const questions = await Question.find({ user: user._id });

  res.status(200).json(questions);
});

const getQuestionById = asyncHandler(async (req, res) => {
  const { questionId } = req.params;

  const question = await Question.findById(questionId)
    .populate({ path: "user", select: "fullName" })
    .populate({
      path: "answers",
      populate: { path: "user", select: "fullName email" },
    });

  if (!question) {
    throw new ApiError(404, "Question not found");
  }

  res.status(200).json(question);
});

const createAnswer = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const user = req.user;
  const { questionId } = req.params;

  if (!content) {
    throw new ApiError(400, "Content is required");
  }

  if (!user) {
    throw new ApiError(401, "You need to login to create an answer");
  }

  if (user.Role === "Unregistered") {
    throw new ApiError(403, "Only Registered users can create answers");
  }

  const question = await Question.findById(questionId);

  if (!question) {
    throw new ApiError(404, "Question not found");
  }

  const answer = await Answer.create({
    content,
    question: question._id,
    user: user._id,
  });

  question.answers.push(answer._id);

  await question.save();

  res.status(201).json(answer);
});

const updateAnswer = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const user = req.user;
  const { answerId } = req.params;

  if (!content) {
    throw new ApiError(400, "Content is required");
  }

  const answer = await Answer.findById(answerId);

  if (!answer) {
    throw new ApiError(404, "Answer not found");
  }

  if (answer.user.toString() !== user._id.toString()) {
    throw new ApiError(403, "You are not authorized to update this answer");
  }

  answer.content = content;

  await answer.save();

  res.status(200).json(answer);
});

const deleteAnswer = asyncHandler(async (req, res) => {
  const user = req.user;
  const { answerId } = req.params;

  const answer = await Answer.findById(answerId);

  if (!answer) {
    throw new ApiError(404, "Answer not found");
  }

  if (answer.user.toString() !== user._id.toString() || user.Role === "ADMIN") {
    throw new ApiError(403, "You are not authorized to delete this answer");
  }

  await Answer.findByIdAndDelete(answerId);
  res.status(200).json({ message: "Answer deleted successfully" });
});

const deleteQuestion = asyncHandler(async (req, res) => {
  const user = req.user;
  const { questionId } = req.params;

  const question = await Question.findById(questionId);

  if (!question) {
    throw new ApiError(404, "Question not found");
  }

  if (
    question.user.toString() !== user._id.toString() &&
    user.Role !== "ADMIN"
  ) {
    throw new ApiError(403, "You are not authorized to delete this question");
  }

  await Question.findByIdAndDelete(questionId);

  res.status(200).json({ message: "Question deleted successfully" });
});

export {
  createQuestion,
  getQuestions,
  getUserQuestions,
  getQuestionById,
  createAnswer,
  updateAnswer,
  deleteAnswer,
  deleteQuestion,
};
