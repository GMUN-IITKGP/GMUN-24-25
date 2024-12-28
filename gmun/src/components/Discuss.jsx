import React, { useEffect, useState } from "react";
import styles from "./Discuss.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import Preloader from "./preloader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Discuss = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);
  const userData = useSelector((state) => state.auth.userData);
  useEffect(() => {
    console.log(userData);
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
  }, [userData]);

  const navigate = useNavigate();

  const displayDate = (data) => {
    const date = new Date(data);

    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });

    return formattedDate;
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/posts/questions/${id}`, {
        withCredentials: true,
      });
      console.log(response);
      toast.success("Post deleted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      window.location.reload();
    }
  };

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
        toast.success("Post created successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      }
    }
  };

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <div className={styles["discuss-page"]}>
        <div className={styles["discuss-container"]}>
          <h1 className={styles["discuss-header"]}>Discussions</h1>

          <form className={styles["question-form"]} onSubmit={handlePostSubmit}>
            <div className={styles["form-group"]}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost((prevState) => ({
                    ...prevState,
                    title: e.target.value, // Replace "New Title" with your desired title value
                  }))
                }
                placeholder="Enter your question title"
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={newPost.description}
                onChange={(e) =>
                  setNewPost((prevState) => ({
                    ...prevState,
                    description: e.target.value, // Replace "New Title" with your desired title value
                  }))
                }
                placeholder="Provide more details about your question"
                rows="4"
                required
              />
            </div>

            <button type="submit" className={styles["submit-btn"]}>
              Post Question
            </button>
          </form>

          <div className={styles.discussions}>
            {posts.map((post) => (
              <div
                onClick={() => navigate(`/posts/${post._id}`)}
                key={post._id}
                className={styles["discussion-card"]}
              >
                <h2 className={styles["discussion-title"]}>{post.title}</h2>
                <div className={styles["discussion-meta"]}>
                  Posted by {post.user.fullName} on{" "}
                  {displayDate(post.createdAt)}
                </div>
                <p className={styles["discussion-description"]}>
                  {post.description}
                </p>
                <span className={styles["comments-count"]}>
                  {post.answers.length} comments
                </span>
                {post.user._id === userData._id && (
                  <button
                    onClick={(event) => {
                      event.stopPropagation(); // Prevent the parent onClick from triggering
                      handleDelete(post._id);
                    }}
                    className={styles.button}
                  >
                    <div className={styles.trash}>
                      <div className={styles.top}>
                        <div className={styles.paper}></div>
                      </div>
                      <div className={styles.box}></div>
                      <div className={styles.check}>
                        <svg viewBox="0 0 8 6">
                          <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
                        </svg>
                      </div>
                    </div>
                    <span>Delete Item</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
export default Discuss;
