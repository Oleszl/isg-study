import { useEffect, useState } from "react";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import UserFilter from "./components/users/UserFilter/UserFilter";
import { useUsers } from "./hooks/useUsers";
import "./App.scss";
import UserService from "./API/UserService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";
import UserList from "./components/users/UserList/UserList";
import UserForm from "./components/users/UserForm/UserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);

  const [fetchUsers, isUsersLoading, userError] = useFetching(async () => {
    const response = await UserService.getAll(limit, page);
    setUsers(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    setRefresh(false);
    fetchUsers();
  }, [page, refresh]);

  const createUser = async (newUser) => {
    await UserService.saveUser(newUser);
    setRefresh(true);
    setModal(false);
  };

  const removeUser = async (user) => {
    await UserService.deleteUser(user.id);
    setRefresh(true);
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Create User</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <UserForm create={createUser} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <UserFilter filter={filter} setFilter={setFilter} />
      {userError && <h1>Error happened</h1>}
      {isUsersLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
        >
          <Loader />
        </div>
      ) : (
        <UserList
          remove={removeUser}
          users={sortedAndSearchedUsers}
          title="List of Users:"
        />
      )}
      <Pagination changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default App;
