import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'avatar',
    initialState: {
        user: {
            info: null,
            isLoading: false,
            error: false,
        },
        updateUser: {
            success: false,
            isLoading: false,
            error: false,
        },
    },
    reducers: {
        getInfoUserStart: (state) => {
            state.user.isLoading = true;
        },
        getInfoUserSuccess: (state, action) => {
            state.user.info = action.payload;
            state.user.isLoading = false;
            state.user.error = false;
        },
        getInfoUserFailed: (state) => {
            state.user.isLoading = false;
            state.user.error = true;
        },
        updateUserStart: (state) => {
            state.updateUser.isLoading = true;
        },
        updateUserSuccess: (state) => {
            state.updateUser.success = true;
            state.updateUser.isLoading = false;
            state.updateUser.error = false;
        },
        updateUserFailed: (state) => {
            state.updateUser.isLoading = false;
            state.updateUser.error = true;
        },
    },
});

export const {
    getInfoUserFailed,
    getInfoUserSuccess,
    getInfoUserStart,
    updateUserFailed,
    updateUserSuccess,
    updateUserStart,
} = userSlice.actions;
export default userSlice.reducer;
