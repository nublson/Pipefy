import React from "react"

import { Container, Label } from "./styles"

const Card = () => {
    return (
        <Container>
            <header>
                <Label color="#3b5bfd" />
            </header>
            <p>Fazer migração completa de servcidor</p>
            <img
                src="https://api.adorable.io/avatars/285/abott@adorable.png"
                alt=""
            />
        </Container>
    )
}

export default Card
