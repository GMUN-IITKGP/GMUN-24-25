import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import Preloader from "./preloader";
import "./Postpage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PostPage() {
  const [expandedPostIndex, setExpandedPostIndex] = useState(false);
  const [question, setQuestion] = useState(null);
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/posts/questions/${postId}`
        );
        setQuestion(response.data);
      } catch (error) {
        if (error.response) {
          // If the response is in HTML format, extract the error message using regex
          const htmlContent = error.response.data;
          const regex = /Error: (.*?)<br>/;
          const match = htmlContent.match(regex);

          if (match && match[1]) {
            // The error message is captured in the first group
            console.log(match[1]);
            toast.error(`Error: ${match[1]}`);
          } else {
            // Fallback error message
            toast.error("An error occurred. Please try again.");
          }
        }
      }
      setLoading(false);
    };
    fetchQuestion();
  }, [postId]);

  const togglePost = () => {
    setExpandedPostIndex(!expandedPostIndex);
  };

  const handleAnswerSubmit = async (answer) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/posts/questions/${postId}/answers`,
        {
          content: answer,
        },
        {
          withCredentials: true,
        }
      );
      setQuestion({
        ...question,
        answers: [...question.answers, response.data.content],
      });
      toast.success("Answer submitted successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div className="post">
          <div className="post-heading" onClick={() => togglePost()}>
            <h2>{question.title}</h2>
            <p className="post-author">Posted by {question.user.fullName}</p>
            <p className="post-date">
              {new Date(question.createdAt).toDateString()}
            </p>
            {/* <p>{question.description}</p> */}
          </div>
          {expandedPostIndex && (
            <div className="post-details">
              <div className="comments-section">
                <h3 className="comments-header">Comments</h3>
                {question.answers.map((answer, answerIndex) => (
                  <div key={answerIndex} className="comment">
                    <p className="comment-author">{answer.user.fullName}</p>
                    <p className="comment-date">
                      {new Date(answer.createdAt).toDateString()}
                    </p>
                    <p>{answer.content}</p>
                  </div>
                ))}
                <form
                  className="new-comment-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const answer = e.target.elements.answer.value.trim();
                    if (answer) {
                      handleAnswerSubmit(answer);
                      e.target.reset();
                    }
                  }}
                >
                  <input
                    type="text"
                    name="answer"
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
      </div>
    );
  }
}

export default PostPage;
