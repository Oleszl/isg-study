import React, { useContext } from "react";
import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../UI/navbar/Navbar";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Posts from "../../pages/Posts";
import Users from "../../pages/Users";
import PostIdPage from "../../pages/PostIdPage";
import UserIdPage from "../../pages/UserIdPage";
import Login from "../../pages/Login";
import { AuthContext } from "../../context";
import Loader from "../UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Fragment>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/users/:id" element={<UserIdPage />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        <Route exact path="/login" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  ) : (
    <Fragment>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Fragment>
  );
};

export default AppRouter;
