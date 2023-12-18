import { useSelector } from 'react-redux';
import PostList from './PostList';
import { useState } from 'react';

const Posts = () => {
    const posts = useSelector((state) => state.posts.allPosts?.posts);
    const [postDetail, setPostDetail] = useState(false);

    const handleClick = (postId, postDetail, setPostDetail) => {
        setPostDetail(!postDetail);
    };

    return (
        <>
            {posts?.map((post) => (
                <PostList
                    id={post._id}
                    date={post.createdAt?.slice(0, 10)}
                    title={post.title}
                    description={post.desc}
                    image={post.image}
                    nameUser={post.authorUsername}
                    authorID={post.authorId}
                    onClick={handleClick(post._id, postDetail, setPostDetail)}
                    postDetail={postDetail}
                />
            ))}
        </>
    );
};

export default Posts;
