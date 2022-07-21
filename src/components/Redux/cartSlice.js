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
            const Newitem = action.payload;
            const existedItem = state.products.find((i) => i.id == Newitem.id);
            if (!existedItem) {
                state.products.push({
                    title: Newitem.title,
                    quantity: 1,
                    price: Newitem.price,
                    total: Newitem.price,
                    id: Newitem.id,
                });
            } else {
                existedItem.quantity = existedItem.quantity + 1;
                existedItem.total = existedItem.total + Newitem.price;
            }
        },
    },
});

export default cartSlice;
