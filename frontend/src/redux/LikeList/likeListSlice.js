import { createSlice } from '@reduxjs/toolkit';

const likeList = createSlice({
    name: 'like-list',
    initialState: {
        likeItems: [],
    },
    reducers: {
        like(state, action) {
            // newProduct ={ id, product }
            const newProduct = action.payload;
            state.likeItems.push(newProduct);
        },

        unLike(state, action) {
            const idNeedRemove = action.payload;
            state.likeItems = state.likeItems.filter((item) => item.id !== idNeedRemove);
        },
    },
});

const { actions, reducer } = cartSlice;

export const { like, unLike } = actions;

export default reducer;
