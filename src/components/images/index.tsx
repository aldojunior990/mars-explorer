import { useImage } from "../../hooks/useImages";
import { Container, ImageContainer } from "./styles";


export function Images() {

    const { images } = useImage()

    return (
        <Container >
            <p>imagens registradas em 10 de março de 2022</p>

            <ul>
                {
                    images.map((img) => {
                        return (
                            < li key={img.id} >
                                <ImageContainer imgUrl={img.img_src}>
                                    <nav>
                                        <strong>
                                            imagem registrada por <br /> {img.rover.name}
                                        </strong>
                                    </nav>

                                </ImageContainer>
                            </li>
                        )

                    })

                }

            </ul>
        </Container >
    )
}