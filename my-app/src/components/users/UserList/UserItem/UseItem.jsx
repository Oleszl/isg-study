import React from "react";
import MyButton from "../../../UI/button/MyButton";
import "./UserItem.scss";

const UserItem = (props) => {
  return (
    <div className="user">
      <div className="user__content">
        <h2>
          {props.user.id}.{props.user.firstName} {props.user.lastName}
        </h2>
        <div>
          <span>Email:</span> {props.user.email}
          <br />
          <span>Phone:</span> {props.user.phone}
          <br />
          <span>Subscription:</span>{props.user.subscription}
        </div>
      </div>
      <div className="user__btns">
        <MyButton onClick={() => props.remove(props.user)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default UserItem;
