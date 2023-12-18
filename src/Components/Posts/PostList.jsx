import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../Redux/apiRequest';
import { createAxios } from '../../createInstance';
import { loginSuccess } from '../../Redux/authSlice';
import { useNavigate } from 'react-router-dom';

const url = 'https://blog-app-v2-6458.onrender.com';

const PostList = (props) => {
    const { id, date, title, description, image, nameUser, authorID } = props;
    const user = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, loginSuccess);

    const avatarList = useSelector((state) => state.avatar.allAvatar?.avatars);
    const avatarSource =
        avatarList
            ?.filter((item) => item.authorId === authorID)
            .map(
                (filteredItem) =>
                    // `http://localhost:9090/v1/uploads/avatar/${filteredItem.file}`
                    `${url}/v1/uploads/avatar/${filteredItem.file}`
            )[0] || '';

    const handleDelete = () => {
        deletePost(
            dispatch,
            user?.accessToken,
            axiosJWT,
            user?._id,
            id,
            navigate
        );
    };
    return (
        <div>
            <div className="blog-item">
                <img
                    // src={`http://localhost:9090/v1/uploads/post/${image}`}
                    src={`${url}/v1/uploads/post/${image}`}
                    alt=""
                    className="blog-item-img"
                />
                <div className="blog-item-bt">
                    <div className="blog-item-info">
                        <img
                            src={avatarSource}
                            alt="avatar"
                            className="blog-item-ava"
                        />
                        <div className="blog-item-info-1">
                            <p className="blog-item-username">{nameUser}</p>
                            <p className="blog-item-at">{date}</p>
                        </div>
                    </div>
                    <p className="blog-item-title">{title}</p>
                    <p className="blog-item-desc">{description}</p>
                    <button onClick={handleDelete} className="btn-item-delete">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostList;
