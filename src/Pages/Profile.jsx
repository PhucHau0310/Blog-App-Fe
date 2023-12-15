import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnAvatar, getAnInfoUser } from '../Redux/apiRequest';
import { createAxios } from '../createInstance';
import { loginSuccess } from '../Redux/authSlice';
import { useNavigate } from 'react-router-dom';

const url = 'https://blog-app-v2-6458.onrender.com';

const Profile = () => {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const ava = useSelector((state) => state.avatar.avatar?.avaOfUser);
    const userInfo = useSelector((state) => state.user.user?.info);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, loginSuccess);

    useEffect(() => {
        getAnInfoUser(dispatch, user?.accessToken, axiosJWT, user?._id);
    }, []);

    return (
        <div className="profile-container">
            <div className="profile">
                <div className="profile-1">
                    <img
                        // src={`http://localhost:9090/v1/uploads/avatar/${ava?.file}`}
                        // src={`http://localhost:9090/v1/uploads/avatar/${
                        //     userInfo?.avatar[userInfo?.avatar.length - 1]?.file
                        // }`}
                        src={`${url}/v1/uploads/avatar/${
                            userInfo?.avatar[userInfo?.avatar.length - 1]?.file
                        }`}
                        alt="avatar"
                        className="profile-ava"
                    />
                    <p className="profile-username">{userInfo?.username}</p>
                </div>
                <div className="profile-2">
                    <div className="profile-analyst">
                        <span>Post</span>
                        <span>{userInfo?.post.length}</span>
                    </div>
                    <div className="profile-analyst">
                        <span>Followers</span>
                        <span>1</span>
                    </div>
                    <div className="profile-analyst">
                        <span>Flowing</span>
                        <span>1</span>
                    </div>
                </div>

                <button
                    className="btn-profile-edit"
                    onClick={() => navigate('/edit-user')}
                >
                    Edit
                </button>
            </div>

            {userInfo?.post.map((post) => (
                <>
                    <div className="profile-blog">
                        <img
                            className="profile-img"
                            // src={`http://localhost:9090/v1/uploads/post/${post.image}`}
                            src={`${url}/v1/uploads/post/${post.image}`}
                            alt="profile-img"
                        />
                        <p className="profile-title">Title: {post.title}</p>
                        <p className="profile-desc">Desc: {post.desc}</p>
                    </div>
                </>
            ))}

            <button
                className="profile-btn-back"
                onClick={() => navigate('/home')}
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
        </div>
    );
};

export default Profile;
