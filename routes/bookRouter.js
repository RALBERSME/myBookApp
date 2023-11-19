import { Router } from "express";
const router = Router();
import { checkForTestUser } from "../middleware/authMiddleware.js";
import {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  showStats,
} from "../controllers/bookController.js";
import {
  validateBookInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

router
  .route("/")
  .get(getAllBooks)
  .post(checkForTestUser, validateBookInput, createBook);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getBook)
  .patch(checkForTestUser, validateBookInput, validateIdParam, updateBook)
  .delete(checkForTestUser, validateIdParam, deleteBook);

export default router;
