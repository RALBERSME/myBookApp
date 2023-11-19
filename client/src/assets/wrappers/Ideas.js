import styled from "styled-components";

const Wrapper = styled.main`
  .underline {
    width: 100%;
    height: 0.35rem;
    margin-top: 1.25rem;
    background: var(--primarylila-500);
    margin-left: 0;
    margin-right: auto;
  }
  .underlineShort {
    width: 30%;
    height: 0.35rem;
    margin-top: 0.25rem;
    background: var(--primary-300);
    margin-left: 0;
    margin-right: auto;
  }
  .underlineShorter {
    width: 10%;
    height: 0.35rem;
    margin-top: 0.25rem;
    background: var(--primarylila-500);
    margin-left: 0;
    margin-right: auto;
  }
  .underlineShortRight {
    width: 30%;
    height: 0.35rem;
    margin-top: 0.25rem;
    background: var(--primary-300);
    margin-left: auto;
    margin-right: 0;
  }
  .separator {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 10px;
  }
  .links {
    margin: 10px;
  }
  .sources {
    margin: 0 5px;
    align-items: center;
    background-color: var(--primary-100);
  }
  .block {
    margin: 15px;
  }
  .heading {
    color: var(--primarylila-500);
    font-weight: 600;
  }

  .heading2 {
    color: var(--primarylila-500);
    font-weight: 500;
  }
`;

export default Wrapper;
