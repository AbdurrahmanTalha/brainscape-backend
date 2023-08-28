import express from "express";
import studentController from "./student.controller";
const router = express.Router();

router.post("/join-course/:id", studentController.joinCourse);
router.delete("/leave-course/:id");

export default router;
