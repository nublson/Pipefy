import React from "react"

import { Container } from "./styles"
import logo from "../../img/logo-white.svg"

const Header = () => {
    return (
        <Container>
            <img src={logo} alt="Logo" />
        </Container>
    )
}

export default Header
