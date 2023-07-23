import { Request, Response } from "express";
import service from "./user.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "./user.interface";
import httpStatus from "http-status";

const createStudent = catchAsync(async (req: Request, res: Response) => {
    const userData = req.body;
    const user = await service.createStudentService(userData);

    sendResponse<IUser>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Successfully created student",
        data: user,
    });
});

export default { createStudent };
