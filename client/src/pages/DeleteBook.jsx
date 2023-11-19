import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export async function action({ params }) {
  try {
    await customFetch.delete(`/books/${params.id}`);
    toast.success("Book deleted successfully");
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect("/dashboard/all-books");
}
const DeleteBook = () => {
  return <h1>Delete Book</h1>;
};

export default DeleteBook;
