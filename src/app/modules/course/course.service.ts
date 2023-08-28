import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { ICourse } from "./course.interface";
import Course from "./course.model";

const createCourseService = async (payload: ICourse): Promise<ICourse> => {
    const result = await Course.create(payload);
    return result;
};
const addSectionService = async (
    courseId: string,
    title: string
): Promise<ICourse> => {
    const ifExist = await Course.findById(courseId);
    if (!ifExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "Course doesn't exist");
    }

    const result = (await Course.findByIdAndUpdate(
        courseId,
        {
            $push: {
                quizzes: {
                    title,
                    quiz: [],
                },
            },
        },
        { new: true }
    )) as ICourse;
    return result;
};

const removeSectionService = async (
    courseId: string,
    title: string
): Promise<ICourse> => {
    const ifExist = await Course.findById(courseId);
    if (!ifExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "Course doesn't exist");
    }

    const result = (await Course.findByIdAndUpdate(
        courseId,
        {
            $pull: {
                quizzes: {
                    title: title,
                },
            },
        },
        { new: true }
    )) as ICourse;
    return result;
};

export default { createCourseService, addSectionService, removeSectionService };
