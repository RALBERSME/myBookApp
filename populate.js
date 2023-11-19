import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Book from "./models/BookModel.js";
import User from "./models/UserModel.js";

try {
  await mongoose.connect(process.env.MONGO_URL);
  const user = await User.findOne({ email: "john@gmail.com" });
  const jsonBooks = JSON.parse(
    await readFile(new URL("./utils/mockData.json", import.meta.url))
  );
  const books = jsonBooks.map((book) => {
    return { ...book, createdBy: user._id };
  });
  await Book.deleteMany({ createdBy: user._id });
  await Book.create(books);
  console.log("Success!!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
