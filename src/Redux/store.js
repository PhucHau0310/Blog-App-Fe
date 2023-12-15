import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import avaSlice from './avatarSlice';
import postSlice from './postSlice';
import userSlice from './userSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        avatar: avaSlice,
        posts: postSlice,
        user: userSlice,
    },
});
