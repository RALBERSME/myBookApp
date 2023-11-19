import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  nav img {
    margin-top: 8.5rem;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-style: italic;
    font-weight: 400;
    span {
      color: var(--primarylila-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .reading-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .reading-img {
      display: block;
    }
    .checkapp {
      display: block;
      text-align: center;
      background-color: var(--primarylila-300);
    }
  }
`;
export default Wrapper;
