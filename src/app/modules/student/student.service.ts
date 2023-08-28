import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IStudent } from "./student.interface";
import StudentModel from "./student.model";

const joinCourseService = async (studentId: string): Promise<IStudent> => {
    const student = await StudentModel.findById(studentId);

    if (!student) {
        throw new ApiError(httpStatus.NOT_FOUND, "Student not found!");
    }
    return student;
};

const leaveCourseService = async (studentId: string): Promise<IStudent> => {
    const student = await StudentModel.findById(studentId);
    if (!student) {
        throw new ApiError(httpStatus.NOT_FOUND, "Student not found!");
    }
    return student;
};

export default { joinCourseService, leaveCourseService };
