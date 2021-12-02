import classes from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <div className={classes["user-item"]}>
      <p>{`${props.name} (${props.age} years old)`}</p>
    </div>
  );
};

export default UserItem;
