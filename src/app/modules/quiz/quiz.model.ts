import mongoose from "mongoose";
import { IQuiz, QuizModel } from "./quiz.interface";

export const quizSchema = new mongoose.Schema<IQuiz, QuizModel>(
    {
        questions: {
            type: [
                {
                    questionType: {
                        type: String,
                        required: true,
                        enum: [
                            "Bullet Points",
                            "Explanation",
                            "Fill in the gap",
                        ],
                    },
                    bulletPoints: [
                        {
                            type: String,
                            required: false,
                        },
                    ],
                    description: {
                        type: String,
                        required: true,
                        minlength: 150,
                        maxlength: 1220,
                    },
                    question: {
                        type: String,
                        required: true,
                    },
                    answer: {
                        type: String,
                        required: true,
                    },
                    index: {
                        type: Number,
                        required: true,
                    },
                },
            ],
        },
        title: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

const Quiz = mongoose.model<IQuiz, QuizModel>("quiz", quizSchema);

export default Quiz;
