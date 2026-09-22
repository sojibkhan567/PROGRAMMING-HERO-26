import React from 'react'

const PostCard = ({ post }) => {
    return (
        <div className='p-4 border'>
            <h1 className='text-xl font-bold text-amber-800'>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default PostCard