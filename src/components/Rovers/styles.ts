import styled from "styled-components";

export const Container = styled.main`
  width: 60rem;
  ul {
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    li {
      width: 16rem;
      border: 1px solid var(--second-background);
      border-radius: 0.5rem;
      min-height: 19.68rem;
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transition: 0.5s;
      @media (max-width: 768px) {
        width: 100%;
      }
      h2 {
        color: var(--white);
        font-size: 1.5rem;
        font-weight: 700;
      }
      p {
        color: var(--white);
        font-size: 1rem;
        font-weight: 400;
        text-align: center;
        width: 95%;
      }
      a {
        font-size: 1rem;
        font-weight: 700;
        color: var(--orange);
        text-decoration: none;
      }

      &:hover {
        cursor: default;
        border: 1px solid var(--orange);
      }
    }
  }
`;
