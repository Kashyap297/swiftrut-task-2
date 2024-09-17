import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const ViewBlog = () => {
  const { id } = useParams();
  const { getPost, removePost } = useContext(BlogContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(id);
      setPost(data);
    };
    fetchPost();
  }, [id, getPost]);

  const handleDelete = async () => {
    await removePost(id);
    navigate("/");
  };

  if (!post) return <div>Loading...</div>;

  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = new Date(post.createdAt).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
      <div class="relative p-4">
        <div class="max-w-3xl mx-auto">
          <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div class="mt-48">
              <h3 class="text-2xl font-bold my-5">{post.title}</h3>

              <p class="text-base leading-8 my-5">{post.content}</p>
              <div className="flex justify-between items-center mb-5">
                <span className="text-gray-500">Posted on {formattedDate}</span>
                <span className="text-gray-500">{formattedTime}</span>
              </div>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg"
              >
                Delete
              </button>
              <button
                onClick={() => navigate(`/edit/${post._id}`)}
                className="bg-blue-500 text-white px-4 py-2 ml-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
              >
                Edit Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBlog;
