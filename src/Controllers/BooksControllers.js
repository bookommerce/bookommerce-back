import { ObjectId } from "mongodb";
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

export async function getBooksByCategory(req, res) {
    const {category} = req.headers;
    try {
        const books = await db.collection("books").find({ Category: category } ).toArray();
        return res.status(200).send(books);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getBookById(req, res) {
    const { idbook } = req.headers;
    try {
        const book = await db.collection("books").findOne({ _id: ObjectId(idbook) });
        return res.status(200).send(book);
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