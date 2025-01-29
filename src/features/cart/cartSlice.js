import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
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
        (order) => order.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      state.cart.forEach((order) => {
        if (order.pizzaId === action.payload) {
          order.quantity++;
          order.totalPrice = order.unitPrice * order.quantity;
        }
      });
    },
    decreaseItemQuantity(state, action) {
      state.cart.forEach((order) => {
        if (order.pizzaId === action.payload && order.quantity > 0) {
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

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((total, order) => total + order.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => (sum += item.totalPrice), 0);
export const getCart = (state) => state.cart.cart;
export const getUsername = (state) => state.cart.userName;
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
