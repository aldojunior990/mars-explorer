import { Container, Image } from "../../styles/rovers";
import { BiRocket } from "react-icons/bi";
import { HiStatusOnline } from "react-icons/hi";
import { useImage } from "../../hooks/useImages";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";

export default function OpportunityRover() {
  const { imagesOpportunity, setSearch, search } = useImage();

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
        <img src="../spirit.jpg" alt="" />
        <nav className="Container">
          <h2>Rover Opportunity</h2>
          <p>
            O Opportunity foi o segundo dos dois rovers lançados em 2003 a
            pousar em Marte e começar a atravessar o Planeta Vermelho em busca
            de sinais de água antiga. O rover explorou o terreno marciano por
            quase 15 anos, superando em muito sua missão planejada de 90 dias.
            Depois de pousar em Marte em 2004, o Opportunity fez várias
            descobertas sobre o Planeta Vermelho, incluindo evidências
            dramáticas de que há muito tempo pelo menos uma área de Marte
            permaneceu úmida por um longo período e que as condições poderiam
            ter sido adequadas para sustentar a vida microbiana. <br/>
            <a href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-opportunity-mer">
              Ver mais
            </a>
          </p>
          <ul>
            <li>
              {" "}
              <BiRocket className="icon" /> Lançamento:{" "}
              <span> 7 de julho de 2003</span>
            </li>
            <li>
              {" "}
              <HiStatusOnline className="icon" /> Status da missão:{" "}
              <span>completa</span>
            </li>
          </ul>
        </nav>

        <section className="images">
          <h2>Imagens registradas pelo Opportunity</h2>

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
            {imagesOpportunity.length === 0
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
              : imagesOpportunity.map((img) => {
                  return <Image key={img.id} url={img.img_src} />;
                })}
          </div>
          {imagesOpportunity.length !== 0
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
