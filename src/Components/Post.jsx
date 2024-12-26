import React from 'react'

const Post = ({post}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex flex-col space-y-4">
        {/* Image Section */}
        <img
          src={post.urlToImage}
          alt={post.title}
          className="w-full h-48 object-cover rounded-md"
        />
  
        {/* Content Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>

          <a href={post.url} >
            <span className="text-sm text-gray-600">{post.content}</span>
          </a>
        </div>
  
        {/* Author Section */}
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Author:</span> {post.author || "Unknown"}
        </p>
      </div>
    </div>
  );
}

export default Post