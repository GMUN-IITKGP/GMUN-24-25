import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import Preloader from "./preloader";

function PostPage() {
  const [expandedPostIndex, setExpandedPostIndex] = useState(false);
  const [question, setQuestion] = useState(null);
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(postId);
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/posts/questions/${postId}`
        );
        console.log(response.data);
        setQuestion(response.data);
      } catch (error) {
        console.log(error);
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
      console.log(response.data.content);
      setQuestion({
        ...question,
        answers: [...question.answers, response.data.content],
      });
      alert("Answer submitted successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed to submit answer");
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
            <p className="post-author">{question.user.fullName}</p>
            <p className="post-date">{question.createdAt}</p>
            <p>{question.description}</p>
          </div>
          {expandedPostIndex && (
            <div className="post-details">
              {/* <p className="post-description">{question.description}</p> */}
              <div className="comments-section">
                <h3 className="comments-header">Answers</h3>
                {question.answers.map((answer, answerIndex) => (
                  <p key={answerIndex} className="comment">
                    {answer.content}
                  </p>
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
