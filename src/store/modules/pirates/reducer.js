import { CHANGE_CAPTURED } from "./actionTypes"

import defaultPirates from "./defaultPirates"

const piratesReducer = (state = defaultPirates, action) => {
    switch (action.type) {
        case CHANGE_CAPTURED:
            const selectedPirateId = action.selectedPirateId

            const newPiratesList = state.map((pirate) => {
                if (pirate.id === selectedPirateId) {
                    pirate.isCaptured = action.captureState
                }
                return pirate
            })

            return newPiratesList

        default:
            return state
    }
}

export default piratesReducer
