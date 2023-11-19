import React from "react";
import Wrapper from "../assets/wrappers/Ideas";
import bookdata from "../utils/bookdata.json";
const Ideas = () => {
  return (
    <Wrapper>
      <div className="separator" id="totop">
        <section className="section blog">
          <div className="section-title">
            <h2>
              <bold>Reading Ideas</bold>
              <p className="underline"></p>
              <p className="underlineShort"></p>
            </h2>
          </div>
          <div className="section-center blog-center">
            <div className="card">
              <div className="card-side card-front">
                <br></br>
                {bookdata.map((item) => {
                  return (
                    <div
                      className="card-info"
                      key={item.title}
                      value={item.title}
                    >
                      <h3>{item.title}</h3>
                      <br></br>
                      <h3>{item.author}</h3>
                      <br></br>
                      <h4>{item.cathegory}</h4>
                      <br></br>
                      <p>{item.description}</p>
                      <br></br>
                      <p>{item.ISBN}</p>
                      <p>{item.published}</p>
                      <br></br>
                      <div className="card-side card-back">
                        {" "}
                        <br></br>
                        <p className="underlineShort"></p>
                        <p className="underlineShorter"></p>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="section links">
          <div className="sources">
            <div className="block">
              <h4 className="heading">Further book sources</h4>
              <br></br>
              <p className="underline"></p>{" "}
              <p className="underlineShortRight"></p> <br></br>
              <h5 className="heading2">Open Library</h5>
              <br></br>
              <a
                className="btn"
                target="_blank"
                href="https://openlibrary.org/"
              >
                click here
              </a>
              <br></br>
              <br></br>
              <h5 className="heading2">Hessen onleihe</h5>
              <br></br>
              <a
                className="btn"
                target="_blank"
                href="https://hessen.onleihe.de/verbund_hessen/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html"
              >
                click here
              </a>
              <br></br>
              <br></br>
              <h5 className="heading2">goodreads</h5>
              <br></br>
              <a
                className="btn"
                target="_blank"
                href="https://www.goodreads.com/"
              >
                click here
              </a>
              <br></br>
              <br></br>
              <h5 className="heading2">literature-map</h5>
              <br></br>
              <a
                className="btn"
                target="_blank"
                href="https://www.literature-map.com/"
              >
                click here
              </a>
              <br></br>
              <br></br>
              <h5 className="heading2">BookFinder</h5>
              <br></br>
              <a
                className="btn"
                target="_blank"
                href="https://www.bookfinder.com/"
              >
                click here
              </a>
              <br></br>
              <br></br>
              <h5 className="heading2">Five Books</h5>
              <br></br>
              <a className="btn" target="_blank" href="https://fivebooks.com/">
                click here
              </a>
              <br></br>
              <br></br>
              <h5 className="heading2">Comic Book Resources</h5>
              <br></br>
              <a className="btn" target="_blank" href="https://www.cbr.com/">
                click here
              </a>{" "}
              <br></br>
              <br></br>
              <h5 className="heading2">Indie Bookstore Finder</h5>
              <br></br>
              <a
                className="btn"
                target="_blank"
                href="https://www.indiebound.org/indie-store-finder"
              >
                click here
              </a>
              <br></br>
              <br></br>
              <h5 className="heading2">Add All</h5>
              <br></br>
              <a className="btn" target="_blank" href="https://www.addall.com/">
                click here
              </a>
              <br></br>
              <br></br>
              <h5 className="heading2">Alibris</h5>
              <br></br>
              <a
                className="btn"
                target="_blank"
                href="https://www.alibris.com/"
              >
                click here
              </a>
              <br></br>
              <br></br>
              <h5 className="heading2">UPenn`s Online Books Page</h5>
              <br></br>
              <a
                className="btn"
                target="_blank"
                href="https://onlinebooks.library.upenn.edu/search.html"
              >
                click here
              </a>{" "}
              <br></br>
              <br></br>
              <h5 className="heading2">Powell`s Books</h5>
              <br></br>
              <a
                className="btn"
                target="_blank"
                href="https://www.powells.com/"
              >
                click here
              </a>
              <br></br>
              <br></br>
              <h5 className="heading2">
                45 of the funniest books ever written
              </h5>
              <br></br>
              <a
                className="btn"
                target="_blank"
                href="https://www.esquire.com/uk/culture/books/g5331/funniest-books-ever/"
              >
                click here
              </a>
            </div>
            <br></br>
          </div>
        </section>
        <a href="#totop" className="btn">
          Back to top
        </a>
      </div>
    </Wrapper>
  );
};

export default Ideas;
