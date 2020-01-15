import React from "react"
import { DndProvider } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"

import GlobalStyle from "../styles/global"

import Head from "../components/Head"
import Header from "../components/Header"
import Board from "../components/Board"

const App = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Head />
            <GlobalStyle />
            <Header />
            <Board />
        </DndProvider>
    )
}

export default App
