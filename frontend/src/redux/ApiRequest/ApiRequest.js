import axios from 'axios';

import { loginFailed, loginStart, loginSuccess } from 'redux/Auth/authSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());

    axios
        .post('http://localhost:8000/api/auth/login', user)
        .then((res) => {
            dispatch(loginSuccess(res.data));
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
            return dispatch(loginFailed());
        });
};
