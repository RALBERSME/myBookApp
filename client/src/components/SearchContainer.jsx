import { FormRow, FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
import {
  BOOK_TYPE,
  BOOK_THEME,
  BOOK_STATUS,
  BOOK_SORT_BY,
} from "../../../utils/constants";
import { useAllBooksContext } from "../pages/AllBooks";

const SearchContainer = () => {
  const { searchValues } = useAllBooksContext();
  const { search, bookStatus, bookType, bookTheme, sort } = searchValues;
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          {/* search position */}
          <FormRow
            type="search"
            name="search"
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />

          <FormRowSelect
            labelText="book status"
            name="bookStatus"
            list={["all", ...Object.values(BOOK_STATUS)]}
            defaultValue={bookStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="book type"
            name="bookType"
            list={["all", ...Object.values(BOOK_TYPE)]}
            defaultValue={bookType}
            o
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="book theme"
            name="bookTheme"
            list={["all", ...Object.values(BOOK_THEME)]}
            defaultValue={bookTheme}
            o
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            defaultValue={sort}
            list={[...Object.values(BOOK_SORT_BY)]}
          />
          <Link to="/dashboard/all-books" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
