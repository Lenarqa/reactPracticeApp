import classes from "./UserForm.module.css";

const UserForm = (props) => {
  return (
    <form className={classes["user-form"]}>
      <div className={classes["user-form-item"]}>
        <label>Username</label>
        <input type="text" />
      </div>
      <div className={classes["user-form-item"]}>
        <label>Age (Years)</label>
        <input type="number" />
      </div>
      <div className={classes["user-form-button-wrapper"]}>
        <button>Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
