import { UserController } from "@/controllers/user-controller";
import { Router } from "express";

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.post("/", userController.create);

export { usersRoutes };
