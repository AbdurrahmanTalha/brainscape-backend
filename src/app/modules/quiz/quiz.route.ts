import express from "express";
import controller from "./quiz.controller";

const router = express.Router();

router.post("/createQuiz/:courseId/:sectionId", controller.createQuiz);
router.post(
    "/addQuestion/:courseId/:sectionId/:quizId",
    controller.addQuestion
);

export default router;
