import express from "express";
import controller from "./auth.controller";

const router = express.Router();

router.post("/login", controller.loginUser);

export default router;
