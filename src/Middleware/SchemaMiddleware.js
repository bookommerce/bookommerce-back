import { signUpSchema } from "../Schema/AuthSchema.js";

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
