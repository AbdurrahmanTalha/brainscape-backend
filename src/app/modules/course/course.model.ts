import mongoose from "mongoose";
import { CourseModel, ICourse } from "./course.interface";

const courseSchema = new mongoose.Schema<ICourse, CourseModel>(
    {
        category: {
            type: String,
            required: true,
        },
        sections: {
            type: [
                {
                    section: {
                        type: String,
                        required: true,
                    },
                    quiz: [
                        {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "quiz",
                        },
                    ],
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
