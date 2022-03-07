import Container from "./styles"

const CardJail = ({ pirate }) => (
    <Container>
        <img src={pirate.img} alt="" />
        <h3>{pirate.name}</h3>
        <p>{pirate.reward}</p>
    </Container>
)

export default CardJail
