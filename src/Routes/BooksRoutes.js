import { Router } from "express";
import { validateUser } from "../Middleware/SchemaMiddleware.js";
import { getBooks, getCategories, getBookById, getBooksByCategory } from "../Controllers/BooksControllers.js";

const BooksRouter = Router();

BooksRouter.get("/books", validateUser, getBooks);
BooksRouter.get("/books/category", validateUser, getBooksByCategory);
BooksRouter.get("/book/id", validateUser, getBookById);


BooksRouter.get("/categories", validateUser, getCategories);



export default BooksRouter;