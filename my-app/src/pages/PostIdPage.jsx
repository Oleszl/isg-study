import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  useEffect(() => {
    fetchPostById();
  }, []);

  return (
    <div>
      <h1>Post with id: {params.id}</h1>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <strong>Title:</strong> {post.title}
          <br />
          <strong>Body:</strong>
          {post.body}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
