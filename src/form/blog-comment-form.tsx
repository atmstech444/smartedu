"use client"

import React, { useState } from "react";

const BlogCommentForm = () => {
  // Add state to handle checkbox
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event:any) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="blog__comment-input">
            <input type="text" name="name" placeholder="Your Name" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="blog__comment-input">
            <input type="email" name="email" placeholder="Your Email" />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="blog__comment-input">
            <input type="text" name="website" placeholder="Website" />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="blog__comment-input">
            <textarea name="comment" placeholder="Enter your comment ..."></textarea>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="blog__comment-agree d-flex align-items-center mb-20">
            <input
              className="e-check-input"
              type="checkbox"
              id="e-agree"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label className="e-check-label" htmlFor="e-agree">
              Save my name, email, and website in this browser for the next
              time I comment.
            </label>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="blog__comment-btn">
            <button type="submit" className="e-btn">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogCommentForm;
