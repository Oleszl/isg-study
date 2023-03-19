import React from "react";
import "./MyButton.scss";

const MyButton = ({children, ...props}) => {
  return <button className="myBtn" {...props}>{children}</button>;
};

export default MyButton;
