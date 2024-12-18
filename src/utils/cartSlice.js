import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "counter",
  initialState: {
    items: [" pizza", 'burger'],
  },
  reducers: {
    addItem: (state, action) => {
        state.items.push(action.payload);
    },
    removeItem: (state, action) => {
        state.items.pop();
    },
    clearCart: (state, action) => {
        state.items.length = 0;
    }
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
