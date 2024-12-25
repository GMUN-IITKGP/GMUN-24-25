import { Router } from "express";
import {
  createQuestion,
  getQuestions,
  getUserQuestions,
  getQuestionById,
  createAnswer,
  updateAnswer,
  deleteAnswer,
} from "../controllers/qna.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/questions", verifyJWT, createQuestion);
router.get("/questions", getQuestions);
router.get("/questions/user", verifyJWT, getUserQuestions);
router.get("/questions/:questionId", getQuestionById);
router.post("/questions/:questionId/answers", verifyJWT, createAnswer);
router.put("/questions/:questionId/answers/:answerId", verifyJWT, updateAnswer);
router.delete("/questions/:questionId/answers/:answerId", verifyJWT, deleteAnswer);


export default router;
