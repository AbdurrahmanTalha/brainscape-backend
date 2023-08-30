import httpStatus from "http-status";
import { ICourse } from "../course/course.interface";
import Course from "../course/course.model";
import { IQuiz } from "./quiz.interface";
import Quiz from "./quiz.model";
import ApiError from "../../../errors/ApiError";

const createQuizService = async (
    courseId: string,
    sectionId: string,
    data: IQuiz
): Promise<ICourse> => {
    const quiz = await Quiz.create(data);

    const result = await Course.findOneAndUpdate(
        {
            _id: courseId,
            "sections._id": sectionId,
        },
        {
            $push: {
                "sections.$.quiz": quiz._id,
            },
        },
        {
            new: true,
        }
    ).populate("sections.quiz");

    if (!result) {
        throw new ApiError(
            httpStatus.EXPECTATION_FAILED,
            "Failed to create quiz"
        );
    }

    return result;
};

export default { createQuizService };
