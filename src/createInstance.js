import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const url = 'https://blog-app-v2-6458.onrender.com';

const refreshToken = async () => {
    try {
        const res = await axios.post(`${url}/v1/auth/refreshToken`, {
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const createAxios = (user, dispatch, stateSuccess) => {
    const newInstance = axios.create();
    newInstance.interceptors.request.use(
        async (config) => {
            config.withCredentials = true;
            let date = new Date();
            const decodeToken = jwtDecode(user?.accessToken);
            if (decodeToken.exp < date.getTime() / 1000) {
                const data = await refreshToken();
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken,
                };
                dispatch(stateSuccess(refreshUser));
                config.headers['token'] = 'Bearer ' + data.accessToken;
            }
            return config;
        },
        (err) => Promise.reject(err)
    );

    return newInstance;
};
