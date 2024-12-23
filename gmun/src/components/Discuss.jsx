import React, { useEffect, useState } from "react";
import "./Discuss.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import Preloader from "./preloader";

const Discuss = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/posts/questions`);
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const navigate = useNavigate();

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (newPost.title && newPost.description) {
      try {
        const response = await axios.post(
          `${BASE_URL}/posts/questions`,
          {
            title: newPost.title,
            description: newPost.description,
          },
          {
            withCredentials: true,
          }
        );
        console.log(response);
        setPosts([...posts, { ...newPost }]);
        alert("Post created successfully");
      } catch (error) {
        console.log(error);
        alert("Failed to create post");
      }
    }
  };

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <div className="discuss-container">
        <h1 className="discuss-header">Discussions</h1>

        {/* New Post Section */}
        <form className="new-post-form" onSubmit={handlePostSubmit}>
          <input
            type="text"
            className="post-title-input"
            placeholder="Enter a heading..."
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <textarea
            className="post-description-input"
            placeholder="Enter a brief description..."
            value={newPost.description}
            onChange={(e) =>
              setNewPost({ ...newPost, description: e.target.value })
            }
          />
          <button type="submit" className="submit-post-button">
            Post
          </button>
        </form>

        {/* Posts Section */}
        <div className="posts-section">
          {posts &&
            posts.map((post, index) => (
              <div key={index} className="post">
                <div
                  className="post-heading"
                  onClick={() => navigate(`/posts/${post._id}`)}
                >
                  <h2>{post.title}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
};
export default Discuss;
