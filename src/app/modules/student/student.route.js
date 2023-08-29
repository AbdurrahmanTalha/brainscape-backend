"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var student_controller_1 = require("./student.controller");
var router = express_1.default.Router();
router.post("/join-course/:id/:courseId", student_controller_1.default.joinCourse);
router.delete("/leave-course/:id/:courseId", student_controller_1.default.leaveCourse);
exports.default = router;
