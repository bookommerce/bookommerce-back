import db from "../Config/database.js";

export async function PostAddress(req, res) {
    const { address } = req.body;
    const user = res.locals.user;

    try {
        await db.collection("address").insertOne({ address, userId: user._id });
        res.status(201).send("Adicionado com sucesso!");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function GetAddress(_, res) {
    const user = res.locals.user;

    try {
        const address = await db.collection("address").findOne({ userId: user._id });
        return res.status(200).send(address);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}