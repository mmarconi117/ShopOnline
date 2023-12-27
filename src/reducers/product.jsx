import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product_quantity",
    initialState: {
        id: "",
        qty: 1,
        description: "",
        cost: "",
        color: "",
    },
    reducers: {
        increment: (state) => {
            state.qty++;
        },
        decrement: (state) => {
            state.qty--;
        },
        amount: (state, action) => {
            state.qty = action.payload;
        },
        selectColor: (state, action) => {
            state.color = action.payload;
        },
        cost: (state, action) => {
            state.cost = action.payload * state.qty;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
    },
});

export const { increment, decrement, amount, selectColor, cost, setDescription } =
    productSlice.actions;
export default productSlice.reducer;
