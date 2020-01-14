import styled from "styled-components"

export const Container = styled.div`
    padding: 0 1.5rem;
    height: 100%;
    flex: 0 0 32rem;

    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.05);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4.2rem;

        h2 {
            font-weight: 500;
            font-size: 1.6rem;
            padding: 0 1rem;
        }

        button {
            height: 4.2rem;
            width: 4.2rem;
            border-radius: 18px;
            background: #3b5bfb;
            border: 0;
            cursor: pointer;
        }
    }

    ul {
        margin-top: 3rem;
    }
`
