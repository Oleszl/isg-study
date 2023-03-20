import React from "react";
import "./MyInput.scss";

const MyInput = (props) => {
  return <input className="myInput" {...props} required="true"/>;
};

export default MyInput;
