import Link from "next/link";
import { Container } from "./styles";

export function Rovers() {
  return (
    <Container>
      <ul>
        <Link href="rovers/spirit">
          <li>
            <h2>Spirit</h2>
            <p>
              {" "}
              Spirit encontrou evidências de que Marte já foi muito mais úmido
              do que é hoje e ajudou os cientistas a entender melhor o vento
              marciano.
            </p>
            <a>Ver mais</a>
          </li>
        </Link>

        <Link href="rovers/opportunity">
          <li>
            <h2>Opportunity</h2>
            <p>
              Opportunity descobriu evidências de uma área em Marte que
              permaneceu úmida por um longo período e que as condições poderiam
              ter sido adequadas para sustentar a vida microbiana.
            </p>
            <a>Ver mais</a>
          </li>
        </Link>

        <Link href="rovers/curiosity">
          <li>
            <h2>Curiosity</h2>
            <p>
              O Curiosity partiu para responder à pergunta: Marte já teve as
              condições ambientais certas para sustentar pequenas formas de vida
              microbiana?
            </p>
            <a>Ver mais</a>
          </li>
        </Link>
      </ul>
    </Container>
  );
}
