import db from "../Config/database.js";

export async function getBooks(_, res) {
    try {
        const books = await db.collection("books").find().toArray();
        return res.status(200).send(books);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}