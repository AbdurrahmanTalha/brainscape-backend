import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import service from "./course.service";
import sendResponse from "../../../shared/sendResponse";
import { ICourse } from "./course.interface";
import httpStatus from "http-status";

const createCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await service.createCourseService(req.body);
    sendResponse<ICourse>(res, {
        data: result,
        success: true,
        message: "Successfully created course",
        statusCode: httpStatus.OK,
    });
});

const addSection = catchAsync(async (req: Request, res: Response) => {
    const result = await service.addSectionService(
        req.params.courseId,
        req.params.title
    );

    sendResponse<ICourse>(res, {
        data: result,
        success: true,
        message: "Successfully added section",
        statusCode: httpStatus.OK,
    });
});

const removeSection = catchAsync(async (req: Request, res: Response) => {
    const result = await service.removeSectionService(
        req.params.courseId,
        req.params.title
    );

    sendResponse<ICourse>(res, {
        data: result,
        success: true,
        message: "Successfully removed section",
        statusCode: httpStatus.OK,
    });
});

export default { createCourse, addSection, removeSection };
