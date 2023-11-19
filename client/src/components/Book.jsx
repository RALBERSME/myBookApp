import { FaHandPointRight, FaBook, FaCalendarAlt } from "react-icons/fa";

import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Book";
import BookInfo from "./BookInfo";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const Book = ({
  _id,
  title,
  author,
  bookTheme,
  bookType,
  createdAt,
  bookStatus,
}) => {
  const date = day(createdAt).format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="info">
          <h5>Title: {title}</h5>
          <p>author: {author}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <BookInfo icon={<FaHandPointRight />} text={bookTheme} />
          <BookInfo icon={<FaCalendarAlt />} text={date} />
          <BookInfo icon={<FaBook />} text={bookType} />
          <div className={`status ${bookStatus}`}>{bookStatus}</div>
        </div>

        <footer className="actions">
          <Link to={`../edit-book/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-book/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Book;
