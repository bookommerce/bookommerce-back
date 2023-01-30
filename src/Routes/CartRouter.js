import { Router } from "express";
import { AddBookToCart, getCartBooks, getCartBooksById } from "../Controllers/CartController.js";
import { validateUser } from "../Middleware/SchemaMiddleware.js";

const CartRouter = Router();

CartRouter.post("/cart/add", validateUser, AddBookToCart);
CartRouter.get("/cart/id", validateUser, getCartBooksById);
CartRouter.get("/cart", validateUser, getCartBooks);

export default CartRouter;