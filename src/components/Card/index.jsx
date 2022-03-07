import Container from "./styles"

const Card = ({ img }) => (
    <Container>
        <button>Capturar</button>
        <img src={img} alt="" />
    </Container>
)

export default Card
