import Container from "./styles"

import { useDispatch } from "react-redux"

import { captureThunk } from "../../store/modules/pirates/thunk"

const CardHome = ({ pirate }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(captureThunk(pirate.id))
    }

    return (
        <Container isCaptured={pirate.isCaptured}>
            <button onClick={handleClick}>Capturar</button>
            <img src={pirate.img} alt={pirate.name} />
        </Container>
    )
}

export default CardHome
