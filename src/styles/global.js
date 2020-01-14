import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    *,
    *:before,
    *:after{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: inherit;
    }

    html,
    body,
    #root {
        height: 100vh;
    }

    html{
        font-size: 62.5%;
    }

    body{
        box-sizing: border-box;
        font: 1.4rem 'Roboto', sans-serif;
        background: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul{
        list-style: none;
    }

`
