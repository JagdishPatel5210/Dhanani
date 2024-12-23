import { configureStore } from "@reduxjs/toolkit";
import DynamicSlice from '../Slices/DynamicSlice';
import DropDownSlice from "../Slices/DropDownSlice";

export const store = configureStore({
    reducer: {
        DynamicEnt: DynamicSlice,
        DropDownDT: DropDownSlice
    }
})