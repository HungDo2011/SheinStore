import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },

        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },

        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
    },
});

const { actions, reducer } = authSlice;

export const { loginStart, loginSuccess, loginFailed } = actions;

export default reducer;
