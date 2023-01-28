import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URL);

let db;

try {
    await mongoClient.connect();
    db = mongoClient.db();
    console.log("Database connected");
} catch (error) {
    console.log(error);
}

export default db;