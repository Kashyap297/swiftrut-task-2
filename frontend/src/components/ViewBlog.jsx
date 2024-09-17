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
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl">{post.title}</h1>
      <p>{post.content}</p>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2"
      >
        Delete
      </button>
      <button
        onClick={() => navigate(`/edit/${post._id}`)}
        className="bg-blue-500 text-white px-4 py-2 ml-2"
      >
        Edit
      </button>
    </div>
  );
};

export default ViewBlog;
