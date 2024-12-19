import { User } from "../models/User.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { Question } from "../models/Question.model.js";
import { Answer } from "../models/Answer.model.js";

const createQuestion = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const user = req.user;

  if (!content) {
    const error = new Error("Content is required");
    error.status = 400;
    throw error;
  }

  if (!user) {
    const error = new Error("You need to login to create a question");
    error.status = 401;
    throw error;
  }

  if (user.role === "unregistered") {
    const error = new Error("Only users can create questions");
    error.status = 403;
    throw error;
  }

  const question = await Question.create({ content, user: user._id });

  res.status(201).json(question);
});

const getQuestions = asyncHandler(async (req, res) => {
  const questions = await Question.find();

  res.status(200).json(questions);
});

const getUserQuestions = asyncHandler(async (req, res) => {
  const user = req.user;

  const questions = await Question.find({ user: user._id });

  res.status(200).json(questions);
});

const getQuestionById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const question = await Question.findById(id);

  if (!question) {
    const error = new Error("Question not found");
    error.status = 404;
    throw error;
  }

  res.status(200).json(question);
});

const createAnswer = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const user = req.user;
  const { questionId } = req.params;

  if (!content) {
    const error = new Error("Content is required");
    error.status = 400;
    throw error;
  }

  if (!user) {
    const error = new Error("You need to login to create an answer");
    error.status = 401;
    throw error;
  }

  if (user.role === "unregistered") {
    const error = new Error("Only users can create answers");
    error.status = 403;
    throw error;
  }

  const question = await Question.findById(questionId);

  if (!question) {
    const error = new Error("Question not found");
    error.status = 404;
    throw error;
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
    const error = new Error("Content is required");
    error.status = 400;
    throw error;
  }

  const answer = await Answer.findById(answerId);

  if (!answer) {
    const error = new Error("Answer not found");
    error.status = 404;
    throw error;
  }

  if (answer.user.toString() !== user._id.toString()) {
    const error = new Error("You are not authorized to update this answer");
    error.status = 403;
    throw error;
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
    const error = new Error("Answer not found");
    error.status = 404;
    throw error;
  }

  if (answer.user.toString() !== user._id.toString()) {
    const error = new Error("You are not authorized to delete this answer");
    error.status = 403;
    throw error;
  }

  await answer.remove();

  res.status(200).json({ message: "Answer deleted successfully" });
});

export {
  createQuestion,
  getQuestions,
  getUserQuestions,
  getQuestionById,
  createAnswer,
  updateAnswer,
  deleteAnswer,
};
