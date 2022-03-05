import { Container, Link } from "./styles"

import { GiPirateFlag } from "react-icons/gi"

const Header = () => (
    <Container>
        <h1>ONE PIECE</h1>
        <nav>
            <div>
                <GiPirateFlag />
                <Link>Cadeia</Link>
            </div>
        </nav>
    </Container>
)

export default Header
