import { Container, Image } from "../../styles/rovers";
import { BiRocket } from "react-icons/bi";
import { HiStatusOnline } from "react-icons/hi";
import { useImage } from "../../hooks/useImages";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";

export default function SpiritRover() {
  const { imagesSpirit, setSearch } = useImage();

  const carousel = useRef<any>(null);

  const [value, setValue] = useState("");

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
        <img src="../spirit.jpg" alt="" />
        <nav className="Container">
          <h2>Rover Spirit</h2>
          <p>
            Lançado em 2003 para explorar Marte e procurar sinais de vida
            passada, o Spirit superou em muito sua missão planejada de 90 dias,
            que durou mais de seis anos. Entre suas inúmeras descobertas, a
            Spirit encontrou evidências de que Marte já foi muito mais úmido do
            que é hoje e ajudou os cientistas a entender melhor o vento
            marciano. Em maio de 2009, o rover ficou enterrado em solo macio em
            um local chamado {"Troy"}, com apenas cinco rodas de trabalho para
            ajudar no esforço de resgate. Após meses de testes e manobras
            cuidadosamente planejadas, a NASA encerrou os esforços para libertar
            o rover e, eventualmente, encerrou a missão em 25 de maio de 2011. <br />
            <a href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-spirit-mer-spirit">
                 Ver mais
            </a>
          </p>
          <ul>
            <li>
              {" "}
              <BiRocket className="icon" /> Lançamento:{" "}
              <span> 10 de junho de 2003</span>
            </li>
            <li>
              {" "}
              <HiStatusOnline className="icon" /> Status da missão:{" "}
              <span>completa</span>
            </li>
          </ul>
        </nav>

        <section className="images">
          <h2>Imagens registradas pelo Spirit</h2>

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
            {imagesSpirit.length === 0
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
              : imagesSpirit.map((img) => {
                  return <Image key={img.id} url={img.img_src} />;
                })}
          </div>
          {imagesSpirit.length !== 0
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
