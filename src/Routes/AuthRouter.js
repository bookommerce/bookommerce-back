import express from "express";
import { signUp, signIn } from "../Controllers/AuthController.js";
import { validateSignupSchema, validateLoginSchema } from "../Middleware/SchemaMiddleware.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup", validateSignupSchema, signUp);
AuthRouter.post("/signin", validateLoginSchema, signIn);

export default AuthRouter;