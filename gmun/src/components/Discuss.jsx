import React, { useState } from "react";
import "./Discuss.css";

const Discuss = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", description: "" });
  const [expandedPostIndex, setExpandedPostIndex] = useState(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.description) {
      setPosts([...posts, { ...newPost, comments: [] }]);
      setNewPost({ title: "", description: "" });
    }
  };

  const handleCommentSubmit = (postIndex, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].comments.push(comment);
    setPosts(updatedPosts);
  };

  const togglePost = (index) => {
    setExpandedPostIndex(index === expandedPostIndex ? null : index);
  };

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
        {posts.map((post, index) => (
          <div key={index} className="post">
            <div
              className="post-heading"
              onClick={() => togglePost(index)}
            >
              <h2>{post.title}</h2>
            </div>
            {expandedPostIndex === index && (
              <div className="post-details">
                <p className="post-description">{post.description}</p>
                <div className="comments-section">
                  <h3 className="comments-header">Comments</h3>
                  {post.comments.map((comment, commentIndex) => (
                    <p key={commentIndex} className="comment">
                      {comment}
                    </p>
                  ))}
                  <form
                    className="new-comment-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const comment = e.target.elements.comment.value.trim();
                      if (comment) {
                        handleCommentSubmit(index, comment);
                        e.target.reset();
                      }
                    }}
                  >
                    <input
                      type="text"
                      name="comment"
                      placeholder="Write a comment..."
                      className="comment-input"
                    />
                    <button type="submit" className="submit-comment-button">
                      Comment
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discuss;
