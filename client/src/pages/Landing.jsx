import reading from "../assets/images/reading.svg";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoMyBook.png";
import Wrapper from "../assets/wrappers/LandingPage";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="myBookLogo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}

        <img src={reading} alt="reading pic" className="img reading-img" />
        <div className="info">
          <h1>
            MyBook<span>App</span>
          </h1>
          <p>
            Often we hear about great books and we decide to read them too. But
            then the days fly by and we forget what the book was called and a
            chance to read something new, interesting, funny, romantic,
            exciting, inspiring is lost. That doesn't have to be the case. With
            <em> MyBook</em> you save your book list and can look it up again
            and again.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login || Explore without logging in
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
