import React from "react";
import MyButton from "../../../UI/button/MyButton";
import "./PostItem.scss";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <h2>{props.post.title}</h2>
        <div className="post__btn">
          <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
            Info
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
