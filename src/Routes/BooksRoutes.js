import { Router } from "express";
import { getBooks } from "../Controllers/BooksControllers.js";

const BooksRouter = Router();

BooksRouter.get("/books", getBooks);

export default BooksRouter;