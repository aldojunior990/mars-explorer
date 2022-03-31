import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  main {
    width: 60rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    div {
      font-size: 3rem;
      color: var(--white);
      font-weight: 600;
      span {
        color: var(--orange);
      }
    }
    img {
      width: 25rem;
      height: 25rem;
    }

    @media (max-width: 900px) {
      width: 90%;
      img {
        display: none;
      }
    }

    @media (max-width: 425px) {
      width: 95%;
      div{
          font-size: 1.7rem;
      }
    }
  }
`;
