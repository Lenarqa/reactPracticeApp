import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import UserForm from "./components/UserForm/UserForm";
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

  return (
    <div className="App">
      <UserForm />
      <UsersList items={users}/>
    </div>
  );
}

export default App;
