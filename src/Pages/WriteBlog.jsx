import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postBlog } from '../Redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '../createInstance';
import { loginSuccess } from '../Redux/authSlice';

const WriteBlog = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    let axiosJWT = createAxios(user, dispatch, loginSuccess);

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log({ title, desc, image });

        const formData = new FormData();
        formData.append('file', image);
        formData.append('title', title);
        formData.append('desc', desc);

        postBlog(
            dispatch,
            navigate,
            user?._id,
            user?.accessToken,
            axiosJWT,
            formData
        );
    };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="fixed inset-0 bg-black opacity-50"></div>

                <div className="bg-white p-4 shadow-md z-10 ">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block text-sm font-semibold text-gray-600 mb-1"
                            >
                                Title:
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-sm font-semibold text-gray-600 mb-1"
                            >
                                Description:
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="image"
                                className="block text-sm font-semibold text-gray-600 mb-1"
                            >
                                File:
                            </label>
                            <input
                                filename={image}
                                type="file"
                                id="image"
                                name="image"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <button class="cursor-pointer">
                        <Link to="/home">Close</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default WriteBlog;
