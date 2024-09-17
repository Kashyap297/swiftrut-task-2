// BlogList.js

import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

const BlogList = () => {
  const { posts, loading } = useContext(BlogContext);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-24 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        All Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-700 mb-4">
                {post.content
                  ? post.content.substring(0, 100)
                  : "No content available"}
                ...
              </p>
              <Link
                to={`/posts/${post._id}`}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Read More
              </Link>
            </div>
          ))
        ) : (
          <div>No posts available.</div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
