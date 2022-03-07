import Container from "./styles"

import Card from "../../components/Card"

import image1 from "../../assets/img/Brook's_Concert_Wanted_Poster.png"
import image2 from "../../assets/img/Jinbe's_Current_Wanted_Poster.png"

const WantedList = () => (
    <Container>
        <Card img={image1} />
        <Card img={image2} />
    </Container>
)

export default WantedList
