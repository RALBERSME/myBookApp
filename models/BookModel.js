import mongoose from "mongoose";
import { BOOK_STATUS, BOOK_TYPE } from "../utils/constants.js";
const BookSchema = new mongoose.Schema(
  {
    author: String,
    title: String,
    bookStatus: {
      type: String,
      enum: Object.values(BOOK_STATUS),
      default: BOOK_STATUS.PLANNED,
    },
    bookType: {
      type: String,
      enum: Object.values(BOOK_TYPE),
      default: BOOK_TYPE.BOOK_EBOOK,
    },
    bookTheme: {
      type: String,
      enum: [
        "humor",
        "crime",
        "sci-fi",
        "romance",
        "adventure",
        "comedy",
        "history",
        "science",
        "politics",
        "economy",
        "others",
      ],
      default: "others",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", BookSchema);
