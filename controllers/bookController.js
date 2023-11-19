import { nanoid } from "nanoid";
import Book from "../models/BookModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";

export const getAllBooks = async (req, res) => {
  const { search, bookStatus, bookType, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { title: { $regex: search, $options: "i" } },
      { author: { $regex: search, $options: "i" } },
    ];
  }
  if (bookStatus && bookStatus !== "all") {
    queryObject.bookStatus = bookStatus;
  }
  if (bookType && bookType !== "all") {
    queryObject.bookType = bookType;
  }

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const books = await Book.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalBooks = await Book.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalBooks / limit);

  res
    .status(StatusCodes.OK)
    .json({ totalBooks, numOfPages, currentPage: page, books });
};

// CREATE A BOOK
export const createBook = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};

// GET SINGLE BOOK
export const getBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  res.status(StatusCodes.OK).json({ book });
};

// EDIT BOOK
export const updateBook = async (req, res) => {
  const { id } = req.params;

  const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: "book updated", book: updatedBook });
};
// DELETE BOOK
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  const removedBook = await Book.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ msg: "book deleted", book: removedBook });
};

export const showStats = async (req, res) => {
  let stats = await Book.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$bookStatus", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    planned: stats.planned || 0,
    reading: stats.reading || 0,
    finished: stats.finished || 0,
  };

  let monthlyApplications = await Book.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format("MMM YY");
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
