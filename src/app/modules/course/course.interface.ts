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
    title: string;
};

export type CourseModel = mongoose.Model<ICourse, Record<string, unknown>>;

export type ICourseFilters = {
    searchTerm?: string;
};
