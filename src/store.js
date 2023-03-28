import { configureStore } from "@reduxjs/toolkit";
import createSlice from "./createSlice";

const store = configureStore({
    reducer:{
        count: createSlice,
    }
})

export default store;