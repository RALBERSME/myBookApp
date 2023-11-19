import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Sorry, page not found</h3>
          <p>The page you are looking for is not available.</p>
          <Link to="/dashboard">click here to get back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>an error occurred...</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
