import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAva, updateUserInfo } from '../Redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import { createAxios } from '../createInstance';
import { loginSuccess } from '../Redux/authSlice';

const url = 'https://blog-app-v2-6458.onrender.com';

const EditUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ava = useSelector((state) => state.avatar.avatar?.avaOfUser);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const userInfo = useSelector((state) => state.user.user?.info);
    let axiosJWT = createAxios(user, dispatch, loginSuccess);
    const [avatar, setAvatar] = useState();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', avatar);

        postAva(
            dispatch,
            user?.accessToken,
            axiosJWT,
            user?._id,
            navigate,
            formData
        );

        setAvatar('');
    };

    const handleSubmitUpadate = (e) => {
        e.preventDefault();

        const infoUser = {
            email,
            username,
            password,
        };

        updateUserInfo(
            dispatch,
            user?.accessToken,
            axiosJWT,
            user?._id,
            navigate,
            infoUser
        );

        setUsername('');
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <button
                className="setting-user-back"
                onClick={() => navigate('/profile')}
            >
                <svg
                    width="31"
                    height="26"
                    viewBox="0 0 31 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        id="Vector"
                        d="M31 11.3132H6.44444L15.3552 2.3851L12.9747 0L0 13L12.9747 26L15.3552 23.6149L6.44444 14.6868H31V11.3132Z"
                        fill="black"
                    />
                </svg>
            </button>
            <div className="setting-user">
                <form onSubmit={handleSubmit} className="form-setting-user-ava">
                    <img
                        className="setting-user-img"
                        // src={`http://localhost:9090/v1/uploads/avatar/${ava?.file}`}
                        // src={`http://localhost:9090/v1/uploads/avatar/${
                        //     userInfo?.avatar[userInfo?.avatar.length - 1]?.file
                        // }`}
                        src={`${url}/v1/uploads/avatar/${
                            userInfo?.avatar[userInfo?.avatar.length - 1]?.file
                        }`}
                        alt=""
                    />
                    <input
                        type="file"
                        id="customFile"
                        style={{ display: 'none' }}
                        onChange={(e) => setAvatar(e.target.files[0])}
                    />
                    <label
                        for="customFile"
                        id="customLabel"
                        className="customLabel"
                    >
                        Choose a file
                    </label>
                    <button type="submit" className="setting-user-ava-submit">
                        Submit
                    </button>
                </form>
            </div>

            <div className="setting-user-update">
                <form
                    onSubmit={handleSubmitUpadate}
                    className="setting-user-updateee"
                >
                    <input
                        className="update-username"
                        placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="update-email"
                        placeholder="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="update-password"
                        placeholder="Password"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className="setting-user-ava-submit">
                        Update
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditUser;
