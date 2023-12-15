import axios from 'axios';
import {
    loginFailed,
    loginStart,
    loginSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
} from './authSlice';
import {
    avaFailed,
    avaStart,
    avaSuccesss,
    getAllAvaFailed,
    getAllAvaStart,
    getAllAvaSuccess,
    postAvaFailed,
    postAvaStart,
    postAvaSuccess,
} from './avatarSlice';
import {
    deletePostFailed,
    deletePostStart,
    deletePostSuccess,
    getAllPostsFailed,
    getAllPostsStart,
    getAllPostsSuccess,
    postFailed,
    postStart,
    postSuccess,
} from './postSlice';
import {
    getInfoUserFailed,
    getInfoUserStart,
    getInfoUserSuccess,
    updateUserFailed,
    updateUserStart,
    updateUserSuccess,
} from './userSlice';

const url = 'https://blog-app-v2-6458.onrender.com';

// API AUTH
// export const userLogin = async (dispatch, navigate, user) => {
//     dispatch(loginStart());
//     try {
//         const res = await axios.post(`/v1/auth/login`, user);
//         dispatch(loginSuccess(res.data));

//         navigate('/home');
//     } catch (error) {
//         dispatch(loginFailed());
//     }
// };

export const userLogin = async (dispatch, navigate, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${url}/v1/auth/login`, user);
        dispatch(loginSuccess(res.data));

        navigate('/home');
    } catch (error) {
        dispatch(loginFailed());
    }
};

export const userRegister = async (dispatch, navigate, user) => {
    dispatch(registerStart());
    try {
        await axios.post(`${url}/v1/auth/register`, user);
        dispatch(registerSuccess());

        navigate('/');
    } catch (error) {
        dispatch(registerFailed());
    }
};

export const logout = async (
    dispatch,
    navigate,
    axiosJWT,
    accessToken,
    userId
) => {
    dispatch(logoutStart());
    try {
        await axiosJWT.post(`${url}/v1/auth/logout`, userId, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(logoutSuccess());

        navigate('/');
    } catch (error) {
        dispatch(logoutFailed());
    }
};

// API PROFILE
export const getAnAvatar = async (dispatch, avaId, accessToken, axiosJWT) => {
    dispatch(avaStart());
    try {
        const res = await axiosJWT.get(`${url}/v1/ava/${avaId}`, {
            headers: { token: `Bearer ${accessToken}` },
        });

        dispatch(avaSuccesss(res.data));
    } catch (error) {
        dispatch(avaFailed());
    }
};

export const getAllAvatar = async (dispatch, accessToken, axiosJWT) => {
    dispatch(getAllAvaStart());
    try {
        const res = await axiosJWT.get(`${url}/v1/ava/all/getAllAva`, {
            headers: { token: `Bearer ${accessToken}` },
        });

        dispatch(getAllAvaSuccess(res.data));
    } catch (error) {
        dispatch(getAllAvaFailed());
    }
};

// API POSTS BLOG
export const postBlog = async (
    dispatch,
    navigate,
    userId,
    accessToken,
    axiosJWT,
    formData
) => {
    dispatch(postStart());
    try {
        await axiosJWT.post(`${url}/v1/post/${userId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                token: `Bearer ${accessToken}`,
            },
        });

        dispatch(postSuccess());
        navigate('/home');
    } catch (error) {
        dispatch(postFailed());
    }
};

export const getAllPosts = async (dispatch, accessToken, axiosJWT) => {
    dispatch(getAllPostsStart());
    try {
        const res = await axiosJWT.get(`${url}/v1/post/getAllPosts`, {
            headers: { token: `Bearer ${accessToken}` },
        });

        dispatch(getAllPostsSuccess(res.data));
    } catch (error) {
        dispatch(getAllPostsFailed());
    }
};

export const deletePost = async (
    dispatch,
    accessToken,
    axiosJWT,
    userId,
    postId,
    navigate
) => {
    dispatch(deletePostStart());
    try {
        await axiosJWT.delete(`${url}/v1/post/${userId}/${postId}`, {
            headers: { token: `Bearer ${accessToken}` },
        });

        dispatch(deletePostSuccess());
        navigate('/home');
    } catch (error) {
        dispatch(deletePostFailed());
    }
};

export const getAnInfoUser = async (
    dispatch,
    accessToken,
    axiosJWT,
    userId
) => {
    dispatch(getInfoUserStart());
    try {
        const res = await axiosJWT.get(`${url}/v1/user/${userId}`, {
            headers: { token: `Bearer ${accessToken}` },
        });

        dispatch(getInfoUserSuccess(res.data));
    } catch (error) {
        dispatch(getInfoUserFailed());
    }
};

export const postAva = async (
    dispatch,
    accessToken,
    axiosJWT,
    userId,
    navigate,
    formData
) => {
    dispatch(postAvaStart());
    try {
        await axiosJWT.post(`${url}/v1/ava/${userId}`, formData, {
            headers: {
                token: `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        dispatch(postAvaSuccess());
        navigate('/home');
    } catch (error) {
        dispatch(postAvaFailed());
    }
};

export const updateUserInfo = async (
    dispatch,
    accessToken,
    axiosJWT,
    userId,
    navigate,
    infoUser
) => {
    dispatch(updateUserStart());
    try {
        await axiosJWT.put(`${url}/v1/user/updateUser/${userId}`, infoUser, {
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });

        dispatch(updateUserSuccess());
        navigate('/home');
    } catch (error) {
        dispatch(updateUserFailed());
    }
};
