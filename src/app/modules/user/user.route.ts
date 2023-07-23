import express from "express";
import controller from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createUserValidationSchema } from "./user.validation";

const router = express.Router();

router.post(
    "/create-student",
    validateRequest(createUserValidationSchema),
    controller.createStudent
);

export default router;
