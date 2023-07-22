import express, { IRouter } from "express";

type IRoute = {
    path: string;
    router: IRouter;
};

const router = express.Router();

const routes: IRoute[] = [];

routes.forEach(route => router.use(route.path, route.router));

export default router;
