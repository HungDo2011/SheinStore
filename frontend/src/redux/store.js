import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import cartReducer from './Cart/cartSlice';
import likeListReducer from './LikeList/likeListSlice';

const rootReducer = {
    auth: authReducer,
    cart: cartReducer,
    likeList: likeListReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
