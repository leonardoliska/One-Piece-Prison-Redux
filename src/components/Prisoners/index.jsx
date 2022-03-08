import { Container, PrisonersContainer, RewardContainer } from "./styles"

import CardJail from "../CardJail"

const pirate = {
    img: require("../../assets/img/Monkey_D._Luffy's_Current_Wanted_Poster.png"),
    name: "luffy",
    reward: "3000000",
}

export const Prisoners = () => {
    return (
        <Container>
            <aside>
                <h2>Recompensa</h2>
                <span>฿ 10000</span>
            </aside>
            <div />
            <main>
                <CardJail pirate={pirate} />
                <CardJail pirate={pirate} />
            </main>
        </Container>
    )
}

export default Prisoners
