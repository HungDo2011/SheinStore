import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/userSlice';
import cartReducer from './Cart/cartSlice';
import likeListReducer from './LikeList/likeListSlice';

const rootReducer = {
    user: userReducer,
    cart: cartReducer,
    likeList: likeListReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
