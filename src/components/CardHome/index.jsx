import Container from "./styles"

import { useDispatch } from "react-redux"

import { captureThunk } from "../../store/modules/pirates/thunk"

const CardHome = ({ pirate }) => {
    const dispatch = useDispatch()

    const handleClick = (pirateId) => {
        dispatch(captureThunk(pirateId))
    }

    return (
        <Container>
            <button onClick={() => handleClick(pirate.id)}>Capturar</button>
            <img src={pirate.img} alt={pirate.name} />
        </Container>
    )
}

export default CardHome
