import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        artikel : artikelReducer,
        psikolog : psikologReducer,
        konseling : konselingReducer
    }
})

export default store