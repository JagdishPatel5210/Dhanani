import { configureStore } from "@reduxjs/toolkit";
import DynamicSlice from '../Slices/DynamicSlice';

export const store = configureStore({
    reducer: {
        DynamicEnt: DynamicSlice,
    }
})