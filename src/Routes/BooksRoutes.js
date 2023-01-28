import { Router } from "express";
import { getBooks } from "../Controllers/BooksControllers.js";
import { validateUser } from "../Middleware/SchemaMiddleware.js";

const BooksRouter = Router();

BooksRouter.get("/books", validateUser, getBooks);

export default BooksRouter;