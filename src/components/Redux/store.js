import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";

const mainStore = configureStore({
    reducer: {
        toggle: toggleSlice.reducer,
    },
});

export default mainStore;
