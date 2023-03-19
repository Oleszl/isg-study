import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../../../UI/button/MyButton";
import "./UserItem.scss";

const UserItem = (props) => {
  const navigate = useNavigate();

  return (
    <div className="user">
      <div className="user__content">
        <h2>{props.user.name}</h2>
      </div>
      <div className="user__btn">
        <MyButton onClick={() => navigate(`/users/${props.user.id}`)}>
          Info
        </MyButton>
      </div>
    </div>
  );
};

export default UserItem;
