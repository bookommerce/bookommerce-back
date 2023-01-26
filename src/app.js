import express from "express";
import cors from 'cors';
import BooksRouter from "./Routes/BooksRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use([BooksRouter]);


app.listen(5000, () => console.log("Server connected"));