import { Container, PrisonersContainer, RewardContainer } from "./styles"

import CardJail from "../CardJail"

export const Prisoners = () => {
    return (
        <Container>
            <aside>
                <h2>Recompensa</h2>
                <span>฿ 10000</span>
            </aside>
            <div />
            <main>{/* <CardJail /> */}</main>
        </Container>
    )
}

export default Prisoners
