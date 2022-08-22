import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        hasProduct: false,
        cartItems: [],
    },
    reducers: {
        addToCart(state, action) {
            // newProduct ={id, product, quantity }
            const newProduct = action.payload;
            const index = state.cartItems.findIndex((item) => item.id === newProduct.id);
            state.hasProduct = true;

            if (index >= 0) {
                state.cartItems[index].quantity += newProduct.quantity;
            } else {
                state.cartItems.push(newProduct);
            }
        },

        setQuantity(state, action) {
            const { id, quantity } = action.payload;
            // check if product is available in cart
            const index = state.cartItems.findIndex((item) => (item.id = id));

            if (index >= 0) {
                state.cartItems[index].quantity = quantity;
            }
        },

        removeProduct(state, action) {
            const idNeedRemove = action.payload;

            state.cartItems = state.cartItems.filter((item) => item.id !== idNeedRemove);
        },
    },
});

const { actions, reducer } = cartSlice;

export const { addToCart, setQuantity, removeProduct } = actions;

export default reducer;
