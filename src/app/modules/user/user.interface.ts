import mongoose from "mongoose";

export type IName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type IUser = {
    name: IName;
    email: string;
    password: string;
    role: "student" | "teacher" | "admin";
    contact: string;
    profilePicture: string;
    student?: mongoose.Types.ObjectId;
    teacher?: mongoose.Types.ObjectId;
    admin?: mongoose.Types.ObjectId;
};

export type UserModel = mongoose.Model<IUser, Record<string, unknown>>;
