import express from "express";
import controller from "./course.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createCourseValidation } from "./course.validation";

const router = express.Router();

router.get("/", controller.getCourses);
router.get("/:id", controller.getCourse);
router.post(
    "/create-course",
    validateRequest(createCourseValidation),
    controller.createCourse
);
router.post("/add-section/:courseId/:id", controller.addSection);
router.delete("/remove-section/:courseId/:id", controller.removeSection);

export default router;
