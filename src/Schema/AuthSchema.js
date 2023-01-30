import joi from "joi";

export const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
        .regex(/.{8,}/, "A senha deve ter no mínimo 8 caracteres")
        .regex(/(?=.*?[A-Z])/, "A senha deve ter no mínimo 1 letra maiúscula")
        .regex(/(?=.*?[a-z])/, "A senha deve ter no mínimo 1 letra minúscula")
        .regex(/(?=.*?[0-9])/, "A senha deve ter no mínimo 1 número")
        .regex(/(?=.*?[#?!@$%^&*-])/, "A senha deve ter no mínimo um símbolo"),
    passwordConfirm: joi.string().valid(joi.ref('password'), "As senhas não coincidem").required(),
    address: joi.string().required()
}) 

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
}) 
