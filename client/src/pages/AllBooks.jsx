import { toast } from "react-toastify";
import { BooksContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
const AllBooksContext = createContext();
export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get("/books", {
      params,
    });

    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const AllBooks = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AllBooksContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <BooksContainer />
    </AllBooksContext.Provider>
  );
};
export default AllBooks;

export const useAllBooksContext = () => useContext(AllBooksContext);
