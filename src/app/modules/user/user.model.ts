import mongoose from "mongoose";
import { IUser, UserModel } from "./user.interface";

const userSchema = new mongoose.Schema<IUser, UserModel>(
    {
        name: {
            firstName: {
                type: String,
                required: true,
            },
            middleName: {
                type: String,
                required: false,
            },
            lastName: {
                type: String,
                required: true,
            },
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            default: "student",
            enum: ["student", "teacher", "admin"],
        },
        contact: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            required: true,
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
        },
        teacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "teacher",
        },
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "admin",
        },
    },
    { timestamps: true, versionKey: false }
);

const User = mongoose.model<IUser, UserModel>("User", userSchema);

export default User;
