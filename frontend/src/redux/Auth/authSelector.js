import { createSelector } from '@reduxjs/toolkit';

export const userSelector = (state) => state.auth.login.currentUser;

export const userInfo = createSelector(userSelector, (user) => user);
