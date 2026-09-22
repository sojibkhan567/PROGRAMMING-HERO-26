import PostCard from "../components/PostCard";

// get post all data
const getPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

const PostPage = async () => {
    const posts = await getPost();
    console.log(posts)
    return (
        <div className="grid grid-cols-4 gap-6">
            {posts.map((post) => <PostCard key={post.id} post={post}/>)}
        </div>
    )
}

export default PostPage