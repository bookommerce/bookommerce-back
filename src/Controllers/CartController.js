import db from "../Config/database.js";

export async function AddBookToCart(req, res) {
    const { book } = req.body;
    const user = res.locals.user;
    console.log(user);

    try {
        await db.collection("cart").insertOne({ book, userId: user._id });
        res.status(201).send("Adicionado com sucesso!");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function getCartBooks(req, res) {
    const user = res.locals.user;
    try {
        const cart = await db.collection("cart").find({ userId: user._id }).toArray();
        return res.status(200).send(cart);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}

export async function getCartBooksById(req, res) {
    const { bookid } = req.headers;
    const user = res.locals.user;

    try {
        const book = await db.collection("cart").findOne({ userId: user._id, "book.bookId": bookid });
        if (book) return res.sendStatus(200);
        else return res.sendStatus(404);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}