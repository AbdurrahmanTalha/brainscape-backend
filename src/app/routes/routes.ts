import express, { IRouter } from "express";
import authRouter from "../modules/auth/auth.route";
import userRouter from "../modules/user/user.route";

type IRoute = {
    path: string;
    router: IRouter;
};

const router = express.Router();

const routes: IRoute[] = [
    {
        path: "/auth",
        router: authRouter,
    },
    {
        path: "/user",
        router: userRouter,
    },
];

routes.forEach(route => router.use(route.path, route.router));

export default router;
