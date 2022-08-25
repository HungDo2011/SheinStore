import { createSlice } from '@reduxjs/toolkit';

const likeListSlice = createSlice({
    name: 'likeList',
    initialState: {
        likeItems: [],
    },
    reducers: {
        toggleLike(state, action) {
            // newProduct ={ id, product }
            const newProduct = action.payload;
            const index = state.likeItems.findIndex((item) => item.id === newProduct.id);

            if (index >= 0) {
                state.likeItems.splice(index, 1);
            } else {
                state.likeItems.push({ liked: true, ...newProduct });
            }
        },
    },
});

const { actions, reducer } = likeListSlice;

export const { toggleLike } = actions;

export default reducer;
