import styled from "styled-components";

interface ImageProps {
  url: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  main {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      height: 25rem;
      object-fit: cover;
      width: 100%;
    }

    .Container {
      width: 60rem;
      padding: 2rem;
      @media (max-width: 900px) {
        width: 100%;
      }
      h2 {
        color: var(--white);
        font-size: 3rem;
        font-weight: 700;
      }
      p {
        color: var(--white);
        font-size: 1rem;
        margin-top: 1rem;
        font-weight: 400;
        text-align: justify;
        a {
          text-decoration: none;
          color: var(--orange);
          transition: 0.5s;
          &:hover {
            filter: brightness(0.9);
          }
        }
      }
      ul {
        margin-top: 1rem;
        display: flex;
        list-style: none;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          font-weight: 600;
          color: var(--orange);
          font-size: 1rem;
          display: flex;
          align-items: center;
          text-align: center;
          flex-wrap: wrap;
          .icon {
            font-size: 1.125rem;
            margin-right: 0.3rem;
          }

          span {
            color: var(--white);
            font-weight: 400;
            margin-left: 0.5rem;
            filter: brightness(0.9);
          }
          & + li {
            margin-left: 1rem;
          }

          @media (max-width: 600px) {
            & + li {
              margin-left: 0rem;
              margin-top: 0.7rem;
            }
          }
        }
      }
    }

    .images {
      width: 60rem;
      padding: 2rem;
      @media (max-width: 900px) {
        width: 99%;
      }
      h2 {
        color: var(--white);
        font-size: 1.5rem;
        font-weight: 600;
      }

      form {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        p {
          color: var(--orange);
          margin-right: 1rem;
        }

        input {
          height: 2rem;
          background: var(--white);
          border: 1px solid white;
          border-radius: 0.2rem 0rem 0rem 0.2rem;
        }
        input:last-child {
          background: var(--orange);
          width: 4rem;
          border: 0;
          border-radius: 0rem 0.2rem 0.2rem 0rem;
          color: var(--white);
          font-weight: 500;
        }
      }

      .carrossel {
        margin-top: 1rem;
        width: 100%;
        height: 25rem;
        display: flex;
        align-items: center;

        overflow: hidden;
        transition: 0.5s;
        scroll-behavior: smooth;
        .notfound {
          margin-top: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          .astronauta {
            object-fit: fill;
            height: 10rem;
          }

          p {
            margin-top: 1rem;
            color: var(--white);
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          overflow: auto;
        }
      }

      .buttons {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px) {
          display: none;
        }
        button {
          margin: 1rem;
          border: 0;
          height: 2rem;
          background: var(--orange);
          width: 4rem;
          border-radius: 0.5rem;
          transition: 0.5s;
          color: var(--white);
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }

    footer {
      width: 60rem;
      padding: 2rem;
      @media (max-width: 900px) {
        width: 99%;
      }
      a {
        text-decoration: none;
        color: var(--orange);
        transition: 0.5s;
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;

export const Image = styled.div<ImageProps>`
  background-image: url("${({ url }) => url}");
  min-width: 25rem;
  height: 18rem;
  margin-right: 1rem;
  color: var(--orange);

  @media (max-width: 375px) {
    min-width: 20rem;
  }
  @media (max-width: 320px) {
    min-width: 18rem;
    height: 15rem;
  }
`;
