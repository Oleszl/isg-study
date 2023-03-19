import React, { useEffect, useState } from "react";
import UserService from "../API/UserService";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import UserList from "../components/users/UserList/UserList";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const [fetchUsers, isUsersLoading, userError] = useFetching(async () => {
    const response = await UserService.getAll(limit, page);
    setUsers(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="users" style={{ width: "50%" }}>
      <hr style={{ margin: "15px 0" }} />

      {userError && <h1>Error happened</h1>}
      {isUsersLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
        >
          <Loader />
        </div>
      ) : (
        <UserList users={users} title="List of Users:" />
      )}
      <Pagination changePage={changePage} totalPages={totalPages} />
    </div>
  );
};

export default Users;
