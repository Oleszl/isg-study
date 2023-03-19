import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../API/UserService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const UserIdPage = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [fetchUserById, isLoading, error] = useFetching(async () => {
    const response = await UserService.getById(params.id);

    setUser(response.data);
  });
  useEffect(() => {
    fetchUserById();
  }, []);

  console.log(user.company);
  return (
    <div>
      <h1>User with id: {params.id}</h1>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <strong>Name: </strong> {user.name}
          <br />
          <strong>username: </strong>
          {user.username}
          <br />
          <strong>Email: </strong>
          {user.email}
          <br />
          <strong>Phone: </strong>
          {user.phone}
        </div>
      )}
    </div>
  );
};
export default UserIdPage;
