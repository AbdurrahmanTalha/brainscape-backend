import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IStudent } from "./student.interface";
import Student from "./student.model";
import Course from "../course/course.model";
import User from "../user/user.model";

const joinCourseService = async (
    userId: string,
    courseId: string
): Promise<IStudent> => {
    const user = await User.findById(userId);

    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found!");
    }

    const course = await Course.findById(courseId);
    if (!course) {
        throw new ApiError(httpStatus.NOT_FOUND, "Course not found");
    }

    const obj = { courseId: courseId, progress: [] };
    const result = await Student.findByIdAndUpdate(
        user.student,
        {
            $push: {
                courses: obj,
            },
        },
        {
            new: true,
        }
    );
    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, "Failed to join course");
    }

    return result;
};

const leaveCourseService = async (studentId: string): Promise<IStudent> => {
    const student = await Student.findById(studentId);
    if (!student) {
        throw new ApiError(httpStatus.NOT_FOUND, "Student not found!");
    }
    return student;
};

export default { joinCourseService, leaveCourseService };
