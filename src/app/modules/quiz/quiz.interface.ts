import mongoose from "mongoose";

export type IQuiz = {
    questions: {
        questionType: "Bullet Point" | "Explanation" | "Fill in the gap";
        bulletPoints?: string[];
        description: string;
        question: string;
        answer: string | number;
        index: number;
        explanation: string;
    }[];
    title: string;
};

export type QuizModel = mongoose.Model<IQuiz, Record<string, unknown>>;
