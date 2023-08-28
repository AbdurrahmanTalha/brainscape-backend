import mongoose from "mongoose";
import { CourseModel, ICourse } from "./course.interface";

const quizSchema = new mongoose.Schema({
    quiz: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
});

const courseSchema = new mongoose.Schema<ICourse, CourseModel>(
    {
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
    },
    { timestamps: true, versionKey: false }
);

const Course = mongoose.model<ICourse, CourseModel>("Course", courseSchema);

export default Course;
