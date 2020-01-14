import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 1.5rem;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 2rem solid rgba(230, 236, 245, 0.5);
    cursor: grab;

    header {
        position: absolute;
        top: -2.2rem;
        left: 1.5rem;
    }

    p {
        font-weight: 500;
        line-height: 2rem;
    }

    img {
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 2px;
        margin-top: 0.5rem;
    }
`

export const Label = styled.span`
    width: 1rem;
    height: 1rem;
    border-radius: 2px;
    display: inline-block;
    background: ${props => props.color};
`
