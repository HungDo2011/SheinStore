import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const register = createAsyncThunk('user/register', async (payload) => {
    const data = await dataApi.register(payload);

    localStorage.setItem('access_tokken', data.jwt);
    localStorage.setItem('access_tokken', JSON.stringify(data.user));

    return data.user;
});

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
