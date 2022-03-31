import type { NextPage } from "next";
import { Header } from "../components/header";
import { Rovers } from "../components/Rovers";
import { Container } from "../styles/home";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />

      <main>
        <div>
          Explore as incriveis  imagens registradas  pelos {" "}
          <span>Rovers Marcianos</span>
        </div>

        <img src="marte.png" alt="Imagem do planeta Marte" />
      </main>

      <Rovers />
    </Container>
  );
};

export default Home;
