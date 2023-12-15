import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        post: {
            success: false,
            isLoading: false,
            error: false,
        },

        allPosts: {
            posts: [],
            isLoading: false,
            error: false,
        },

        deletePost: {
            success: false,
            isLoading: false,
            error: false,
        },
    },
    reducers: {
        postStart: (state) => {
            state.post.isLoading = true;
        },
        postSuccess: (state) => {
            state.post.success = true;
            state.post.isLoading = false;
            state.post.error = false;
        },
        postFailed: (state) => {
            state.post.isLoading = false;
            state.post.error = true;
        },

        getAllPostsStart: (state) => {
            state.allPosts.isLoading = true;
        },
        getAllPostsSuccess: (state, action) => {
            state.allPosts.isLoading = false;
            state.allPosts.posts = action.payload;
            state.allPosts.error = false;
        },
        getAllPostsFailed: (state) => {
            state.allPosts.isLoading = false;
            state.allPosts.error = true;
        },

        deletePostStart: (state) => {
            state.deletePost.isLoading = true;
        },
        deletePostSuccess: (state) => {
            state.deletePost.isLoading = false;
            state.deletePost.success = true;
            state.deletePost.error = false;
        },
        deletePostFailed: (state) => {
            state.deletePost.isLoading = false;
            state.deletePost.error = true;
        },
    },
});

export const {
    postStart,
    postSuccess,
    postFailed,
    getAllPostsFailed,
    getAllPostsSuccess,
    getAllPostsStart,
    deletePostFailed,
    deletePostSuccess,
    deletePostStart,
} = postSlice.actions;
export default postSlice.reducer;
