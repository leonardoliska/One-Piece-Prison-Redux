import Container from "./styles"

const CardJail = ({ pirate }) => (
    <Container>
        <img src={pirate.img} alt="" />
        <div></div>
        <div>
            <h3>{pirate.name}</h3>
            <p>฿ {new Intl.NumberFormat("de-DE").format(pirate.reward)}</p>
        </div>
    </Container>
)

export default CardJail
