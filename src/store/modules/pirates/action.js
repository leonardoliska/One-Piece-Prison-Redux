import { CAPTURE } from "./actionTypes"

export const capture = (selectedPirateId) => ({
    type: CAPTURE,
    selectedPirateId,
})
