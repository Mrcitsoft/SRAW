// src/components/CommentsSection.js
import React, { useState } from "react";
import "./CommentsSection.css";

const CommentsSection = ({ comments }) => {
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState(comments);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setCommentList([...commentList, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="comments-section">
      <h2> Comments </h2>{" "}
      <ul>
        {" "}
        {commentList.map((comment, index) => (
          <li key={index}> {comment} </li>
        ))}{" "}
      </ul>{" "}
      <div className="comment-form">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleAddComment}> Submit </button>{" "}
      </div>{" "}
    </div>
  );
};

export default CommentsSection;
