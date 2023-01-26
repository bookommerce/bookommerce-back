import { Router } from "express";
import { getBooks } from "../Controllers/BooksContollers.js";


const BooksRouter = Router();

BooksRouter.get("/books", getBooks);

export default BooksRouter;