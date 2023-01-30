import { Router } from "express";
import { GetAddress, PostAddress } from "../Controllers/AddressController.js";
import { validateUser } from "../Middleware/SchemaMiddleware.js";

const AddressRouter = Router();

AddressRouter.post("/address", validateUser, PostAddress);
AddressRouter.get("/address", validateUser, GetAddress);

export default AddressRouter;