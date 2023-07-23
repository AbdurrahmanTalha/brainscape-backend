import mongoose from "mongoose";
import { IUser } from "./user.interface";
import User from "./user.model";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";

const createStudentService = async (user: IUser): Promise<IUser> => {
    user.role = "student";
    const session = await mongoose.startSession();
    let newUserData = null;
    try {
        session.startTransaction();
        const newUser = await User.create([user], { session });
        if (!newUser || newUser.length === 0) {
            throw new ApiError(
                httpStatus.BAD_REQUEST,
                "Failed to create user!"
            );
        }
        newUserData = newUser[0];
        await session.commitTransaction();
        await session.endSession();
    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw error;
    }
    return newUserData;
};

export default { createStudentService };
