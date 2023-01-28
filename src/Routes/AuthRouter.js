import express from "express";
import { signUp } from "../Controllers/AuthController.js";
import { validateSignupSchema } from "../Middleware/SchemaMiddleware.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup", validateSignupSchema, signUp);

export default AuthRouter;