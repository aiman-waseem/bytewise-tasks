
  
  // User component to display user details
  function User(props) {
    return (
      <div>
        <h3>{props.user.name}</h3>
        <p>{props.user.email}</p>
      </div>
    );
  }
  
  // UserList component to display list of users
  function UserList(props) {
    return (
      <div>
        {props.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
  export default UserList;
  
  