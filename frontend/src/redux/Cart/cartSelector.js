import { createSelector } from '@reduxjs/toolkit';

export const hasProduct = (state) => state.cart.hasProduct;
export const cartItemsSelector = (state) => state.cart.cartItems;

// Count quantity product in cart

export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
    cartItems.reduce((count, item) => count + item.quantity, 0),
);

// Total Pay
export const cartItemsTotalPaySelector = createSelector(cartItemsSelector, (cartItems) =>
    cartItems.reduce((count, item) => {
        const price = item.product.promotional_price > 0 ? item.product.promotional_price : item.product.price;
        const result = (count + price * item.quantity) * 1000;

        let totalBill = result.toString().split('');
        totalBill.splice(-3, 0, '.');

        return totalBill.join('');
    }, 0),
);
