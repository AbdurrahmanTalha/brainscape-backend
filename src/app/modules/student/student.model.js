"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var StudentSchema = new mongoose_1.default.Schema({
    courses: [
        {
            courseId: { type: String, required: true },
            progress: [String],
        },
    ],
    recommendCourses: [String],
    dailyStreak: [
        {
            day: String,
            date: Number,
            active: Boolean,
        },
    ],
}, {
    timestamps: true,
    versionKey: false, // Turns off versionKey
});
var Student = mongoose_1.default.model("Student", StudentSchema);
exports.default = Student;
