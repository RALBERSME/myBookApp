import Book from "./Book";
import Wrapper from "../assets/wrappers/BooksContainer";
import PageBtnContainer from "./PageBtnContainer";
import { useAllBooksContext } from "../pages/AllBooks";

const BooksContainer = () => {
  const { data } = useAllBooksContext();
  const { books, totalBooks, numOfPages } = data;
  if (books.length === 0) {
    return (
      <Wrapper>
        <h2>No books to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalBooks} book{books.length > 1 && "s"} found
      </h5>
      <div className="books">
        {books.map((book) => {
          return <Book key={book._id} {...book} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default BooksContainer;
