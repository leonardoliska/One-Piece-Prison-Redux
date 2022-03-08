import { capture } from "./action"

export const captureThunk = (pirateId) => (dispatch, getState) => {
    const { pirates } = getState()

    const selectedPirate = pirates.find((pirate) => pirate.id === pirateId)

    if (!selectedPirate.isCaptured) {
        dispatch(capture(selectedPirate.id))
    } else {
        console.log("Pirata já está capturado")
    }
}
