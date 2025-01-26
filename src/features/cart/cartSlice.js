import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (order) => order.pizzaId !== action.pizzaId,
      );
    },
    increaseItemQuantity(state, action) {
      state.cart.forEach((order) => {
        if (order.pizzaId === action.pizzaId) {
          order.quantity++;
          order.totalPrice = order.unitPrice * order.quantity;
        }
      });
    },
    decreaseItemQuantity(state, action) {
      state.cart.forEach((order) => {
        if (order.pizzaId === action.pizzaId && order.quantity > 0) {
          order.quantity--;
          order.totalPrice = order.unitPrice * order.quantity;
        }
      });
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

console.log(initialState);

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
