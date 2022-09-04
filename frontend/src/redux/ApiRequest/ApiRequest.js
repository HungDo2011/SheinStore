import axios from 'axios';

import { loginFailed, loginStart, loginSuccess } from 'redux/Auth/authSlice';

export const loginUser = (user, dispatch, navigate) => {
    dispatch(loginStart());
    // try {
    //     let res = axios.get('http://localhost:8000/api/auth/login', user);
    //     dispatch(loginSuccess(res.data));
    // } catch (error) {
    //     console.log(error);
    //     dispatch(loginFailed());
    // }

    axios
        .get('http://localhost:8000/api/auth/login', user)
        .then((res) => dispatch(loginSuccess(res.data)))
        .catch((err) => {
            console.log(err);
            dispatch(loginFailed());
        });
};
