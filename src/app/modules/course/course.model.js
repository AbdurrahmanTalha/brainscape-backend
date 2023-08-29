"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var quizSchema = new mongoose_1.default.Schema({
    quiz: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
});
var courseSchema = new mongoose_1.default.Schema({
    category: {
        type: String,
        required: true,
    },
    quizzes: {
        type: [
            {
                title: { type: String },
                quiz: [quizSchema],
            },
        ],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["Public", "Private"],
    },
    title: {
        type: String,
        required: true,
    },
}, { timestamps: true, versionKey: false });
var Course = mongoose_1.default.model("Course", courseSchema);
exports.default = Course;
