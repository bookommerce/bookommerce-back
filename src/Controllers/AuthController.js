import bcrypt from "bcrypt"
import db from "../Config/database.js";

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