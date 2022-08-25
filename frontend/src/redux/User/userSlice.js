import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const register = createAsyncThunk('user/register', async (payload) => {});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {},
    },
    reducers: {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    },
});

const { reducer } = userSlice;

export default reducer;
