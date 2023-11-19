import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    //border-top: 5px solid var(--primarylila-500);
    background-color: white;
    border-width: 7px;
    border-color: violet;
    border-style: inset;
    outline: 0.5rem inset rgb(126, 5, 1);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primarylila-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
  .explore {
    background-color: var(--primarylila-300);
  }
`;
export default Wrapper;
