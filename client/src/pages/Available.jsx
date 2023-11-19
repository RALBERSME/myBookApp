import React from "react";
import styled from "styled-components";

import { FaDownload } from "react-icons/fa";
const Wrapper = styled.aside`
  div {
    width: 70vw;
    margin-top: 50px;
    display: flex;
    align-items: start;
    justify-content: left;
    font-size: 1rem;

    text-transform: capitalize;

    font-weight: 300;
  }
  p {
    display: block;
  }
  a {
    margin-left: 15px;
  }
  a:hover {
    cursor: pointer;
    color: purple;
  }
  .top {
    margin-top: 50px;
  }
  .small {
    text-transform: lowercase;
  }
`;

const Available = () => {
  return (
    <Wrapper>
      <div class="top">
        <p>check if availabe at hessen onleihe:</p>
        <br></br>
        <a
          className="btn"
          href="https://hessen.onleihe.de/verbund_hessen/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html"
          target="_blank"
        >
          Check<span>... </span>
          <FaDownload />
        </a>
      </div>
      <div>
        <p>
          check Goethe Institut`<span className="small">s</span> free offers:
        </p>
        <br></br>
        <a
          className="btn"
          href="https://www.goethe.de/de/kul/bib/onl.html"
          target="_blank"
        >
          check <span>... </span>
          <FaDownload />
        </a>
      </div>
    </Wrapper>
  );
};

export default Available;
