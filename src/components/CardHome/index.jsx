import Container from "./styles"

const CardHome = ({ img }) => (
    <Container>
        <button>Capturar</button>
        <img src={img} alt="" />
    </Container>
)

export default CardHome
