import { Router } from "express";
import { getBooks, getCategories, getBookById, getBooksByCategory } from "../Controllers/BooksControllers.js";

const BooksRouter = Router();

BooksRouter.get("/books", getBooks);
BooksRouter.get("/books/category", getBooksByCategory);
BooksRouter.get("/book/id", getBookById);


BooksRouter.get("/categories", getCategories);

export default BooksRouter;