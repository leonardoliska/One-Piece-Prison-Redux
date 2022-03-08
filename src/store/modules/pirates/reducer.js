import { CAPTURE } from "./actionTypes"

import defaultPirates from "./defaultPirates"

const piratesReducer = (state = defaultPirates, action) => {
    switch (action.type) {
        case CAPTURE:
            const selectedPirateId = action.selectedPirateId

            const newPiratesList = state.map((pirate) => {
                if (pirate.id === selectedPirateId) {
                    pirate.isCaptured = true
                }
                return pirate
            })

            return newPiratesList

        default:
            return state
    }
}

export default piratesReducer
