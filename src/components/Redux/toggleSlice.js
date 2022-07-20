import { createSlice } from "@reduxjs/toolkit";

const ToggleState = {
    showToggle: false,
};

const toggleSlice = createSlice({
    name: "toggle",
    initialState: ToggleState,
    reducers: {
        ToggleActivator(state) {
            state.showToggle = !state.showToggle;
        },
    },
});

export default toggleSlice;
