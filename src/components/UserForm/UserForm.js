import React, {useState} from "react";
import classes from "./UserForm.module.css";

import InvalidWindow from "../InvalidWindow/InvalidWindow"; 

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setValid] = useState(true);

  const changeNameInput = (event) => {
    console.log(event.target.value);
    setName(event.target.value)
  }

  const changeAgeInput = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  }

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("form submit");
    const user = {
      id: Math.random().toString(),
      name: name,
      age: age
    }

    if(name.trim().length === 0 || age.toString().length === 0) {
      setValid(false);
      console.log(isValid);
      return;
    }

    props.onAddNewUser(user);

    setName("");
    setAge("");
  }

  const closeInvalidWindow = (isClouse) => {
    setValid(true);
  } 
  return (
    <form onSubmit={formSubmit} className={classes["user-form"]}>
      {!isValid && <InvalidWindow onCloseInvalidWindow={closeInvalidWindow} />}
      <div className={classes["user-form-item"]}>
        <label>Username</label>
        <input value={name} onChange={changeNameInput} type="text" />
      </div>
      <div className={classes["user-form-item"]}>
        <label>Age (Years)</label>
        <input value={age} onChange={changeAgeInput} type="number" />
      </div>
      <div className={classes["user-form-button-wrapper"]}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
