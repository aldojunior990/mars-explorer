import { FormEvent, useState } from "react";
import { useImage } from "../../hooks/useImages";
import { Container } from "./styles";


export function Header() {

    const { setSearch } = useImage()


    const [date, setDate] = useState("")

    function OnHandleNewSearch(event: FormEvent) {
        event.preventDefault();

        setSearch({ earth_date: date });

        setDate("");
    }

    return (
        <Container>
            <img src="logo.png" alt="logo" />
            <strong>Explore as incriveis imagens registradas pelos Rovers Marcianos</strong>
            <form onSubmit={OnHandleNewSearch}>
                <input type="text" value={date}
                    placeholder="Digite uma data aqui... ex: 2020-2-3"
                    onChange={(event) => setDate(event.target.value)} />
                <input type="submit" value="Buscar" />
            </form>
        </Container>
    )
}