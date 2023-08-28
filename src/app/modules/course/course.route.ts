import express from "express";
import controller from "./course.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createCourseValidation } from "./course.validation";

const router = express.Router();

router.post(
    "/create-course",
    validateRequest(createCourseValidation),
    controller.createCourse
);
router.post("/add-section/:courseId/:title", controller.addSection);
router.delete("/remove-section/:courseId/:title", controller.removeSection);

export default router;
