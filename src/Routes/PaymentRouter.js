import { Router } from "express";
import { GetPayment, PostPayment } from "../Controllers/PaymentController.js";
import { validateUser } from "../Middleware/SchemaMiddleware.js";

const PaymentRouter = Router();

PaymentRouter.post("/address", validateUser, PostPayment);
PaymentRouter.get("/address", validateUser, GetPayment);

export default PaymentRouter;