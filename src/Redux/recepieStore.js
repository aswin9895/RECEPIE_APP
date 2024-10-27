import { configureStore } from "@reduxjs/toolkit";
import recepieSlice from "./Slices/recepieSlice";

const recepieStore = configureStore({
    reducer: {
        recepieReducer: recepieSlice
    }
})

export default recepieStore