import React, { useContext, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addPost } = useContext(BlogContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setErrorMessage("Title and Content are required.");
      return;
    }

    try {
      await addPost({ title, content });
      // Redirect to the home page where all blogs are listed
      navigate("/");
    } catch (error) {
      setErrorMessage("Error creating post. Please try again.");
      console.error("Error creating post:", error);
    }
  };

  return (
    <div class="min-h-screen  py-6 flex flex-col justify-center sm:py-12 shadow-lg">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10">
          <div class="max-w-md mx-auto">
            <div class="flex items-center space-x-5">
              <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                i
              </div>
              <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 class="leading-relaxed">Create New Post</h2>
                <p class="text-sm text-gray-500 font-normal leading-relaxed capitalize">
                  Create a new post then press create button
                </p>
              </div>
            </div>
            <div class="divide-y divide-gray-200">
              <form onSubmit={handleSubmit}>
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="flex flex-col">
                    <label class="leading-loose">Post Title</label>
                    <input
                      type="text"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Post title"
                    ></input>
                  </div>

                  <div class="flex flex-col">
                    <label class="leading-loose">Post Content</label>
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
                <div class="pt-4 flex items-center space-x-4">
                  <button
                    type="submit"
                    class="bg-blue-500 bg-gradient-to-r from-indigo-500 to-purple-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
