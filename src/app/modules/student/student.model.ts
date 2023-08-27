import mongoose from "mongoose";
import { IStudent } from "./student.interface";

const StudentSchema = new mongoose.Schema<IStudent>(
    {
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
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
        versionKey: false, // Turns off versionKey
    }
);

const StudentModel = mongoose.model<IStudent>("Student", StudentSchema);

export default StudentModel;
