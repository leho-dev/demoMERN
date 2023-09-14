import { Router } from "express";
import UserController from "../controllers/user.js";

const route = Router();

route.post("/signup", UserController.signup);

export default route;
