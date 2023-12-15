import { useEffect } from 'react';
import Posts from '../Components/Posts/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAvatar, getAllPosts } from '../Redux/apiRequest';
import { createAxios } from '../createInstance';
import { loginSuccess } from '../Redux/authSlice';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/footer';

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const deletePost = useSelector((state) => state.posts.deletePost.success);
    let axiosJWT = createAxios(user, dispatch, loginSuccess);

    useEffect(() => {
        getAllPosts(dispatch, user?.accessToken, axiosJWT);
    }, [deletePost]);

    useEffect(() => {
        getAllAvatar(dispatch, user?.accessToken, axiosJWT);
    }, []);
    return (
        <>
            <NavBar />
            <Posts />
            <Footer />
        </>
    );
};

export default Home;
