import express from "express";
import controller from "./quiz.controller";

const router = express.Router();

router.post("/:courseId/:sectionId", controller.createQuiz);

export default router;
