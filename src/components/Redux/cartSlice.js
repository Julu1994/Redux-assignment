import { createSlice } from "@reduxjs/toolkit";

const CartState = {
    totalQuantity: 0,
    products: [],
};

const cartSlice = createSlice({
    name: "myCart",
    initialState: CartState,
    reducers: {
        AddingToCart(state, action) {
            state.totalQuantity = state.totalQuantity + 1;
            const item = action.payload;
            state.products.push(item);
        },
    },
});

export default cartSlice;
