import express from "express";
import cors from 'cors';
import BooksRouter from "./Routes/BooksRoutes.js";
import AuthRouter from "./Routes/AuthRouter.js";
import CartRouter from "./Routes/CartRouter.js";
import AddressRouter from "./Routes/AddressRouter.js";
import PaymentRouter from "./Routes/PaymentRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use([BooksRouter, AuthRouter, CartRouter, AddressRouter, PaymentRouter]);


app.listen(5000, () => console.log("Server connected"));