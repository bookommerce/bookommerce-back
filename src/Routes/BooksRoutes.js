import { Router } from "express";
import { getBooks, getCategories } from "../Controllers/BooksContollers.js";


const BooksRouter = Router();

BooksRouter.get("/books", getBooks);

BooksRouter.get("/categories", getCategories);

export default BooksRouter;