import React, { useState, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    {
      id: "1",
      name: "Maxim",
      age: "22"
    },
    {
      id: "2",
      name: "Lenar",
      age: "23"
    },
    {
      id: "3",
      name: "Stepan",
      age: "22"
    },
  ]);

  const addNewUserHandler = (uName, uAge) => {
    setUsersList((prevState)=> ([
      {
        id: Math.random().toString(),
        name: uName,
        age: uAge
      },
      ...prevState
    ]));
  }

  let content = <h2 style={{color: "white"}}>Nobody's here.</h2>;

  if(usersList.length > 0) {
    content = <UsersList users={usersList}/>;
  }

  return (
    <Fragment>
      <AddUser onAddUser={addNewUserHandler} />
      {content}
    </Fragment>
  );
}

export default App;
