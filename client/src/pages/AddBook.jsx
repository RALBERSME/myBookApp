import React from "react";
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { BOOK_STATUS, BOOK_TYPE, BOOK_THEME } from "../../../utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import Available from "./Available";
<script></script>;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/books", data);
    toast.success("Book added successfully");
    return redirect("all-books");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddBook = () => {
  const { user } = useOutletContext();
  /*const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";*/

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add book</h4>
        <div className="form-center">
          <FormRow type="text" name="title" />
          <FormRow type="text" name="author" />

          <FormRowSelect
            labelText="book Theme"
            name="bookTheme"
            defaultValue={BOOK_THEME.CRIME}
            list={Object.values(BOOK_THEME)}
          />
          <FormRowSelect
            labelText="book status"
            name="bookStatus"
            defaultValue={BOOK_STATUS.PLANNING}
            list={Object.values(BOOK_STATUS)}
          />
          <FormRowSelect
            name="bookType"
            labelText="book type"
            defaultValue={BOOK_TYPE.BOOK_EBOOK}
            list={Object.values(BOOK_TYPE)}
          />

          <SubmitBtn formBtn />
        </div>
      </Form>
      <Available />
    </Wrapper>
  );
};

export default AddBook;
