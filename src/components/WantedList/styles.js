import styled from "styled-components"

const Container = styled.div`
    width: min(90%, 1000px);
    margin: auto;
    margin-bottom: 30px;

    main {
        min-height: calc(100vh - 160px);
        width: 100%;
        background: #180f08e5;
        border-radius: 10px;
        border: 4px dashed #f0c171;
        display: grid;
        grid-template-columns: repeat(auto-fit, 200px);
        justify-content: center;
        gap: 20px;
        box-shadow: 0px 10px 27px 0px rgba(0, 0, 0, 0.75);
        padding: 20px;
    }

    div {
        height: 30px;
        border-right: 4px dashed #f0c171dd;
        border-left: 4px dashed #f0c171dd;
    }
`

export default Container
