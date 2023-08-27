import mongoose from "mongoose";

export type IQuizzes = {
    title: string;
    quiz: Array<{
        quiz: string;
        index: number;
    }>;
};

export type ICourse = {
    category: string;
    quizzes: IQuizzes[];
    description: string;
    image: string;
    status: "Public" | "Private";
};

export type CourseModel = mongoose.Model<ICourse, Record<string, unknown>>;
