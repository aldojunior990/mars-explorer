import styled from "styled-components";

export const Container = styled.header`
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    width: 95%;
  }
  color: var(--white);
  font-weight: 700;
  font-size: 1.5rem;
  transition: 0.5s;
  &:hover {
    filter: brightness(1.5);
  }
`;
