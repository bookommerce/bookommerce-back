import db from "../Config/database.js";

export async function getBooks(req, res) {
    const {category} = req.headers;

    try {
        const books = await db.collection("books").find(category && { Category: category } ).toArray();
        return res.status(200).send(books);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getCategories(_, res) {
    try {
        const books = await db.collection("books").find().toArray();
        const categories = [...new Set(books.map(b => b.Category))];
        return res.status(200).send(categories);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}