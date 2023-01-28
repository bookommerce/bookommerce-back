import { signUpSchema, loginSchema } from "../Schema/AuthSchema.js";
import jwt from "jsonwebtoken";
import db from "../Config/database.js";

export function validateSignupSchema(req, res, next) {
    const { name, email, password, passwordConfirm, address } = req.body

    const user = {
        name,
        email,
        password,
        passwordConfirm,
        address
    }

    const validation = signUpSchema.validate(user, { abortEarly: true })
    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();
}

export function validateLoginSchema(req, res, next) {
    const { email, password } = req.body

    const user = {
        email: email,
        password: password
    }

    const validation = loginSchema.validate(user, { abortEarly: true })
    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();
}

export async function validateUser(req, res, next) {
    try {
        const { authorization } = req.headers
        
        const token = authorization?.replace("Bearer ", '')

        if (!token) return res.status(422).send("Informe o token!")

        const secretKey = `${process.env.JWT_SECRET}`
        
        const data = JSON.stringify(jwt.verify(token, secretKey))
        

        const session = await db.collection("sessions").find({})
        
        if (!session) return res.status(401).send("Usuário não existe")

        const user = await db.collection("users").findOne({ userId: data._id });

        if (!user) return res.status(401).send("Usuário não existe")
        res.locals.user = user;

        next()
    } catch (error) {
        console.log(error)
        return res.status(500).send("Houve um problema no servidor")
    }
}