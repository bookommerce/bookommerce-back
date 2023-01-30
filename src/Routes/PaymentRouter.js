import { Router } from "express";
import { GetPayment, PostPayment } from "../Controllers/PaymentController.js";
import { validateUser } from "../Middleware/SchemaMiddleware.js";

const PaymentRouter = Router();

PaymentRouter.post("/payment", validateUser, PostPayment);
PaymentRouter.get("/payment", validateUser, GetPayment);

export default PaymentRouter;
