import React, { useState } from "react";

import './input.scss'

const PostForm = () => {
  const [post, setPost] = useState({
    table: "",
    time: "",
    item: "",
    context: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  const alert2 = () => {
    alert("등록되었습니다!")
  }

  return (
    <div className="inputLayout">

      <div className="inputTitle">게시글 작성</div>

      <form onSubmit={handleSubmit}>
        
        <div>
          <div>테이블:</div>
          <input
            type="text"
            id="table"
            name="table"
            value={post.table}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div>시간:</div>
          <input
            type="text"
            id="time"
            name="time"
            value={post.time}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div>물건:</div>
          <input
            type="text"
            id="item"
            name="item"
            value={post.item}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div>내용:</div>
          <textarea
            id="context"
            name="context"
            value={post.context}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" onClick={alert2}>등록</button>
      </form>
    </div>
  );
};

export default PostForm;