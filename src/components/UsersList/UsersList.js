import classes from './UsersList.module.css'
import UserItem from '../UserItem/UserItem';

const UsersList = (props) => {
    return (
       <div className={classes["users-list"]}>
           {
               props.items.map(user => {
                   return <UserItem key={user.id} name={user.name} age={user.age}/>;
               })
           }
       </div>
    );
};

export default UsersList;