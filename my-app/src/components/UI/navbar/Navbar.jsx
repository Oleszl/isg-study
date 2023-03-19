import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import "./navbar.scss";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
      }}
    >
      <div className="navbar__links">
        <div className="navbar__item">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar__item">
          <Link to="/users">Users</Link>
        </div>
        <div className="navbar__item">
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      <MyButton onClick={logout}>Log out</MyButton>
    </div>
  );
};

export default Navbar;
