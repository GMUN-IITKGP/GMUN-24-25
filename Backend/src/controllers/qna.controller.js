import { User } from "../models/User.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { Question } from "../models/Question.model.js";
import { Answer } from "../models/Answer.model.js";

const createQuestion = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const user = req.user;

  if (!content) {
    throw new Error("Content is required");
  }

  if(!user) {
    throw new Error(401, "You need to login to create a question");
  }

  if(user.role === "unregistered") {
    throw new Error(403, "Only users can create questions");
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
    throw new Error(404, "Question not found");
  }

  res.status(200).json(question);
});

const createAnswer = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const user = req.user;
  const { questionId } = req.params;

  if (!content) {
    throw new Error("Content is required");
  }

  if(!user) {
    throw new Error(401, "You need to login to create an answer");
  }

  if(user.role === "unregistered") {
    throw new Error(403, "Only users can create answers");
  }

  const question = await Question.findById(questionId);

  if (!question) {
    throw new Error(404, "Question not found");
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
    throw new Error("Content is required");
  }

  const answer = await Answer.findById(answerId);

  if (!answer) {
    throw new Error(404, "Answer not found");
  }

  if (answer.user.toString() !== user._id.toString()) {
    throw new Error(403, "You are not authorized to update this answer");
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
    throw new Error(404, "Answer not found");
  }

  if (answer.user.toString() !== user._id.toString()) {
    throw new Error(403, "You are not authorized to delete this answer");
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
