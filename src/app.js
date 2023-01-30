import express from "express";
import cors from 'cors';
import BooksRouter from "./Routes/BooksRoutes.js";
import AuthRouter from "./Routes/AuthRouter.js";
import CartRouter from "./Routes/CartRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use([BooksRouter, AuthRouter, CartRouter]);


app.listen(5000, () => console.log("Server connected"));