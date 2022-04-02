import { Container, Image } from "../../styles/rovers";
import { BiRocket } from "react-icons/bi";
import { HiStatusOnline } from "react-icons/hi";
import { useImage } from "../../hooks/useImages";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";

export default function CuriosityRover() {
  const { imagesCuriosity, setSearch, search } = useImage();

  const carousel = useRef<any>(null);

  const [value, setValue] = useState(search.earth_date);

  const notFound = [1];

  function handleNewSearch(event: FormEvent) {
    event.preventDefault();

    setSearch({ earth_date: value });
  }

  function handleLeftClick(event: any) {
    event.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function handleRightClick(event: any) {
    event.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <Container>
      <main>
        <img src="../curiosity.png" alt="" />
        <nav className="Container">
          <h2>Rover Curiosity</h2>
          <p>
            O rover Curiosity da missão Mars Science Laboratory pousou na
            Cratera Gale de Marte na noite de 5 de agosto de 2012 PDT (manhã de
            6 de agosto EDT) usando uma série de manobras de pouso complicadas
            nunca antes tentadas. A sequência de pouso especializada, que
            empregou um pára-quedas gigante, um veículo de descida controlado a
            jato e um aparato semelhante a um bungee chamado{" "}
            {"guindaste celeste"}, foi concebido porque as técnicas de pouso
            testadas usadas durante as missões anteriores do rover não podiam
            acomodar com segurança o muito maior e mais pesado Andarilho. A
            missão do Curiosity é determinar se o Planeta Vermelho já foi
            habitável à vida microbiana. O rover, que tem aproximadamente o
            tamanho de um MINI Cooper, é equipado com 17 câmeras e um braço
            robótico contendo um conjunto de ferramentas e instrumentos
            especializados em laboratório.
            <br />
            <a href="https://www.jpl.nasa.gov/missions/mars-science-laboratory-curiosity-rover-msl">
              Ver mais
            </a>
          </p>
          <ul>
            <li>
              {" "}
              <BiRocket className="icon" /> Lançamento:{" "}
              <span>26 de novembro de 2011</span>
            </li>
            <li>
              {" "}
              <HiStatusOnline className="icon" /> Status da missão:{" "}
              <span> em andamento</span>
            </li>
          </ul>
        </nav>

        <section className="images">
          <h2>Imagens registradas pelo Curiosity</h2>

          <form onSubmit={handleNewSearch}>
            <p>Buscar por data:</p>
            <input
              type="date"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <input type="submit" value="buscar" />
          </form>
          <div className="carrossel" ref={carousel}>
            {imagesCuriosity.length === 0
              ? notFound.map((i) => {
                  return (
                    <>
                      <div className="notfound">
                        <img
                          className="astronauta"
                          src="../astronauta.svg"
                          alt="astronauta"
                        />
                        <p>Sem registro de imagens nessa data</p>;
                      </div>
                    </>
                  );
                })
              : imagesCuriosity.map((img) => {
                  return <Image key={img.id} url={img.img_src} />;
                })}
          </div>
          {imagesCuriosity.length !== 0
            ? notFound.map((i) => {
                return (
                  <>
                    <div className="buttons">
                      <button onClick={handleLeftClick}>{"<"}</button>
                      <button onClick={handleRightClick}>{">"}</button>
                    </div>
                  </>
                );
              })
            : () => {}}
        </section>

        <footer>
          <Link href="/">
            <a>Pagina inicial</a>
          </Link>
        </footer>
      </main>
    </Container>
  );
}
