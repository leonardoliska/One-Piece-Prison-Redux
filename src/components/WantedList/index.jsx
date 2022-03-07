import Container from "./styles"

import CardHome from "../../components/CardHome"

import image1 from "../../assets/img/Brook's_Concert_Wanted_Poster.png"
import image2 from "../../assets/img/Jinbe's_Current_Wanted_Poster.png"

const WantedList = () => (
    <Container>
        <CardHome img={image1} />
        <CardHome img={image2} />
    </Container>
)

export default WantedList
