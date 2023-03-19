import React, { useState } from "react";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";

const UserForm = ({ create }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subscription: "",
  });

  const addNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      ...user,
      id: Date.now(),
    };

    create(newUser);

    setUser({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subscription: "",
    });
  };

  return (
    <form>
      <MyInput
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        type="text"
        placeholder="First Name"
      />
      <MyInput
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        type="text"
        placeholder="Last Name"
      />
      <MyInput
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        type="text"
        placeholder="Email"
      />
      <MyInput
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        type="text"
        placeholder="Phone"
      />
      <MyInput
        value={user.subscription}
        onChange={(e) => setUser({ ...user, subscription: e.target.value })}
        type="text"
        placeholder="Subscription"
      />
      <MyButton onClick={addNewUser}>Save User</MyButton>
    </form>
  );
};

export default UserForm;
