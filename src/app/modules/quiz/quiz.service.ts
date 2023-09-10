import httpStatus from "http-status";
import { ICourse } from "../course/course.interface";
import Course from "../course/course.model";
import { IQuestion, IQuiz } from "./quiz.interface";
import ApiError from "../../../errors/ApiError";
import mongoose from "mongoose";

const createQuizService = async (
    courseId: string,
    sectionId: string,
    data: IQuiz
): Promise<ICourse> => {
    const result = await Course.findOneAndUpdate(
        {
            _id: courseId,
            "sections._id": sectionId,
        },
        {
            $push: {
                "sections.$.quiz": data,
            },
        },
        {
            new: true,
        }
    );

    if (!result) {
        throw new ApiError(
            httpStatus.EXPECTATION_FAILED,
            "Failed to create quiz"
        );
    }

    return result;
};

const addQuestionsService = async (
    courseId: string,
    sectionId: string,
    quizId: string,
    data: IQuestion
) => {
    const course = await Course.findById(courseId);
    if (!course || !course.sections) {
        throw new ApiError(httpStatus.NOT_FOUND, "Failed to find course");
    }

    const section = course.sections.find(
        section => section._id.toString() === sectionId
    );
    let newIndex = 0;

    if (section) {
        const quiz = section.quiz.find(quiz => quiz._id.toString() === quizId);

        if (quiz) {
            newIndex = quiz.questions.length;
        } else {
            throw new ApiError(httpStatus.NOT_FOUND, "Failed to find section");
        }
    } else {
        throw new ApiError(httpStatus.NOT_FOUND, "Failed to find section");
    }

    const newQuestion: IQuestion = {
        ...data,
        index: newIndex,
    };

    const result = await Course.findOneAndUpdate(
        {
            _id: courseId,
            "sections._id": sectionId,
            "sections.quiz._id": quizId,
        },
        {
            $push: {
                "sections.$[section].quiz.$[quiz].questions": newQuestion,
            },
        },
        {
            new: true,
            arrayFilters: [
                {
                    "section._id": new mongoose.Types.ObjectId(sectionId),
                },
                {
                    "quiz._id": new mongoose.Types.ObjectId(quizId),
                },
            ],
        }
    );

    return result;
};

export default { createQuizService, addQuestionsService };
