import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData } from "react-router-dom";
import { BOOK_STATUS, BOOK_TYPE, BOOK_THEME } from "../../../utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/books/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return redirect("/dashboard/all-books");
  }
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/books/${params.id}`, data);
    toast.success("Book edited successfully");
    return redirect("/dashboard/all-books");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const EditBook = () => {
  const { book } = useLoaderData();

  /*const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";*/

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit book</h4>
        <div className="form-center">
          <FormRow type="text" name="title" defaultValue={book.title} />
          <FormRow type="text" name="author" defaultValue={book.author} />
          <FormRow
            type="text"
            labelText="book theme"
            name="bookTheme"
            defaultValue={book.bookTheme}
          />

          <FormRowSelect
            name="bookStatus"
            labelText="book status"
            defaultValue={book.bookStatus}
            list={Object.values(BOOK_STATUS)}
          />
          <FormRowSelect
            name="bookType"
            labelText="book type"
            defaultValue={book.bookType}
            list={Object.values(BOOK_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditBook;
