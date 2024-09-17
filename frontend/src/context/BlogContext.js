import React, { createContext, useState, useEffect } from "react";
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById,
} from "../api";

// Create BlogContext
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all posts initially
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await getAllPosts();
        setPosts(response.data); // Store the posts in state
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Stop loading after fetch
      }
    };
    fetchPosts();
  }, []); // Only run this once on component mount

  const addPost = async (postData) => {
    try {
      await createPost(postData); // Wait for the post to be created in the backend
      const updatedPosts = await getAllPosts(); // Re-fetch posts from the server
      setPosts(updatedPosts.data); // Update the posts in the state
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // Edit a post
  const editPost = async (id, updatedData) => {
    try {
      const response = await updatePost(id, updatedData);
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === id ? response.data : post))
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // Delete a post
  const removePost = async (id) => {
    try {
      await deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Get post by ID
  const getPost = async (id) => {
    try {
      const response = await getPostById(id);
      return response.data;
    } catch (error) {
      console.error("Error fetching post by ID:", error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        addPost,
        editPost,
        removePost,
        getPost,
        loading,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
