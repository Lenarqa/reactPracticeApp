import React, { useState } from "react";
import classes from "./AddUser.module.css";

import InvalidWindow from "../InvalidWindow/InvalidWindow";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setValid] = useState(true);

  const changeUsernameHandler = (event) => {
    console.log(event.target.value);
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    const user = {
      id: Math.random().toString(),
      name: enteredUsername,
      age: enteredAge,
    };

    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setValid(false);
      return;
    }

    if(+enteredAge < 0) {
      return;
    }

    props.onAddNewUser(user);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const closeInvalidWindow = (isClouse) => {
    setValid(true);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {!isValid && (
          <InvalidWindow onCloseInvalidWindow={closeInvalidWindow} />
        )}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={enteredUsername}
          onChange={changeUsernameHandler}
          type="text"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
          type="number"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
