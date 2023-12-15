import { createSlice } from '@reduxjs/toolkit';

const avatarSlice = createSlice({
    name: 'avatar',
    initialState: {
        avatar: {
            avaOfUser: null,
            isLoading: false,
            error: false,
        },

        allAvatar: {
            avatars: null,
            isLoading: false,
            error: false,
        },

        postAva: {
            success: false,
            isLoading: false,
            error: false,
        },
    },
    reducers: {
        avaStart: (state) => {
            state.avatar.isLoading = true;
        },
        avaSuccesss: (state, action) => {
            state.avatar.avaOfUser = action.payload;
            state.avatar.isLoading = false;
            state.avatar.error = false;
        },
        avaFailed: (state) => {
            state.avatar.isLoading = false;
            state.avatar.error = true;
        },
        getAllAvaStart: (state) => {
            state.allAvatar.isLoading = true;
        },
        getAllAvaSuccess: (state, action) => {
            state.allAvatar.avatars = action.payload;
            state.allAvatar.isLoading = false;
            state.allAvatar.error = false;
        },
        getAllAvaFailed: (state) => {
            state.allAvatar.isLoading = false;
            state.allAvatar.error = true;
        },
        postAvaStart: (state) => {
            state.postAva.isLoading = true;
        },
        postAvaSuccess: (state) => {
            state.postAva.success = true;
            state.postAva.isLoading = false;
            state.postAva.error = false;
        },
        postAvaFailed: (state) => {
            state.postAva.isLoading = false;
            state.postAva.error = true;
        },
    },
});

export const {
    avaStart,
    avaSuccesss,
    avaFailed,
    getAllAvaFailed,
    getAllAvaSuccess,
    getAllAvaStart,
    postAvaFailed,
    postAvaStart,
    postAvaSuccess,
} = avatarSlice.actions;
export default avatarSlice.reducer;
