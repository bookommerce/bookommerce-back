import bcrypt from "bcrypt"
import db from "../Config/database.js";
import jwt from 'jsonwebtoken';

export async function signUp(req, res) {
    const { name, email, password, address } = req.body

    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        const resp = await db.collection("users").findOne({ email })

        if (resp && bcrypt.compareSync(password, resp.password)) {
            return res.status(422).send("Usuário já existe");
        } else {
            await db.collection("users").insertOne({
                name,
                email,
                password: passwordHash,
                address
            })
        }
        return res.status(201).send("Usuário cadastrado");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body

    try {
        const user = await db.collection("users").findOne({ email })
        console.log(user)
        if (user && bcrypt.compareSync(password, user.password)) {

            const secretKey = `${process.env.JWT_SECRET}`;

            const expiresIn = { expiresIn: 60*60*24*10 }

            const token = jwt.sign(user, secretKey, expiresIn);

            await db.collection("sessions").insertOne({
                userId: user._id,
                token
            })

            res.locals.token = token;

            return res.status(200).send({ id: user._id, name: user.name, token });
        } else {
            return res.status(401).send("Usuário ou senha incorretos");
        }

    } catch (error) {
        return res.status(500).send(error.message);
    }
}