import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [users, setUser] = useState([
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

  const addNewUser = (newUser) => {
    setUser((prevState)=> ([
      newUser,
      ...prevState
    ]));
  }

  let content = <h2 style={{color: "white"}}>Nobody's here.</h2>;

  if(users.length > 0) {
    content = <UsersList items={users}/>;
  }

  return (
    <div className="App">
      <AddUser onAddNewUser={addNewUser} />
      {content}
    </div>
  );
}

export default App;
