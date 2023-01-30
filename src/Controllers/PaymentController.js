import db from "../Config/database.js";

export async function PostPayment(req, res) {
    const { payment } = req.body;
    const user = res.locals.user;

    try {
        await db.collection("payment").insertOne({ payment, userId: user._id });
        res.status(201).send("Adicionado com sucesso!");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function GetPayment(_, res) {
    const user = res.locals.user;

    try {
        const payment = await db.collection("payment").findOne({ userId: user._id });
        return res.status(200).send(payment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}