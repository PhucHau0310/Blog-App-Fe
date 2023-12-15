import { useSelector } from 'react-redux';
import PostList from './PostList';

const Posts = () => {
    const posts = useSelector((state) => state.posts.allPosts?.posts);
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
                />
            ))}
        </>
    );
};

export default Posts;
