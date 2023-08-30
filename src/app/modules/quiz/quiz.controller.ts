import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ICourse } from "../course/course.interface";
import service from "./quiz.service";
import { Request, Response } from "express";

const createQuiz = catchAsync(async (req: Request, res: Response) => {
    const result = await service.createQuizService(
        req.params.courseId,
        req.params.sectionId,
        req.body
    );

    sendResponse<ICourse>(res, {
        statusCode: httpStatus.OK,
        message: "Successfully created",
        data: result,
        success: true,
    });
});

export default { createQuiz };
