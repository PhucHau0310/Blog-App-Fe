import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createAxios } from '../../createInstance';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logoutSuccess } from '../../Redux/authSlice';
import { getAnAvatar, getAnInfoUser, logout } from '../../Redux/apiRequest';
import '../../App.css';

const url = 'https://blog-app-v2-6458.onrender.com';

const NavBar = () => {
    const [profile, setProfile] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    let axiosJWT = createAxios(user, dispatch, logoutSuccess);
    let axiosJWT1 = createAxios(user, dispatch, loginSuccess);
    const ava = useSelector((state) => state.avatar.avatar?.avaOfUser);
    const userInfo = useSelector((state) => state.user.user?.info);

    const handleLogOut = () => {
        logout(dispatch, navigate, axiosJWT, user?.accessToken, user?._id);
    };

    // useEffect(() => {
    //     // user?.avatar[0]
    //     getAnAvatar(dispatch, user?.avatar[0], user?.accessToken, axiosJWT1);
    // }, [ava?.file]);

    useEffect(() => {
        getAnInfoUser(dispatch, user?.accessToken, axiosJWT1, user?._id);
    }, []);

    return (
        <header className="header">
            <div className="header-flex">
                <div
                    className="header-rectengle"
                    onClick={() => setProfile(!profile)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M5 18H19M5 6H19H5ZM5 12H19H5Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>

                <div className="header-ava">
                    <img
                        alt="avatar"
                        // src={`http://localhost:9090/v1/uploads/avatar/${ava?.file}`}
                        // src={`http://localhost:9090/v1/uploads/avatar/${
                        //     userInfo?.avatar[userInfo?.avatar.length - 1]?.file
                        // }`}
                        src={`${url}/v1/uploads/avatar/${
                            userInfo?.avatar[userInfo?.avatar.length - 1]?.file
                        }`}
                    />
                </div>
            </div>

            {/* profile */}
            {profile && (
                <div
                    class="absolute left-8 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                >
                    <div
                        class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-0"
                    >
                        <Link to="/profile">Your Profile</Link>
                    </div>
                    <div
                        class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                    >
                        Settings
                    </div>
                    <div
                        class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                        onClick={handleLogOut}
                    >
                        Sign out
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
