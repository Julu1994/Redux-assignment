import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import cartSlice from "./cartSlice";

const mainStore = configureStore({
    reducer: {
        toggle: toggleSlice.reducer,
        cart: cartSlice.reducer,
    },
});

export default mainStore;
