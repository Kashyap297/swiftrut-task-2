import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const EditBlogs = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const { getPost, editPost } = useContext(BlogContext); // Get the context functions
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setTitle(post.title);
      setContent(post.content);
    };
    fetchPost();
  }, [id, getPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setErrorMessage("Title and Content are required.");
      return;
    }

    try {
      await editPost(id, { title, content });
      navigate(`/posts/${id}`); // Redirect to the view page after edit
    } catch (error) {
      setErrorMessage("Error updating post. Please try again.");
    }
  };

  return (
    <>
      {/* <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold">Edit Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Post Content"
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </form>
      </div> */}
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 shadow-lg">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  i
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Edit Post</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed capitalize">
                    Edit your post and press save changes
                  </p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <form onSubmit={handleSubmit}>
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose">Post Title</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Post title"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose">Post Content</label>
                      <textarea
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        value={content}
                        placeholder="Write your content here..."
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </div>
                  </div>
                  {errorMessage && (
                    <div className="text-red-500 text-sm mt-2">
                      {errorMessage}
                    </div>
                  )}
                  <div className="pt-4 flex items-center space-x-4">
                    <button
                      type="submit"
                      className="bg-blue-500 bg-gradient-to-r from-indigo-500 to-purple-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBlogs;
