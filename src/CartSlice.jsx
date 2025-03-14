import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name } = action.payload;

        if (!name) { throw EvalError("Name is empty!") }
        const found = state.items.find(item => item.name === name);
        if (found) {

        } else {
            state.items.push({"name": name, quantity: 1})
        }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
