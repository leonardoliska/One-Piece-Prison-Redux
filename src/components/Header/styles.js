import styled from "styled-components"

import { Link as ReactRouterLink } from "react-router-dom"

export const Container = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin: 0;
    }

    nav {
        padding: 10px 20px;
        border: 1px solid black;
        height: min-content;
    }

    div {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    svg {
        width: 30px;
        height: 30px;
    }
`

export const Link = styled(ReactRouterLink)`
    display: block;
`
