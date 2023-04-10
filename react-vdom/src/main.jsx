import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import UserList from './UserList';

ReactDOM.render(<App />, document.getElementById('root'));

const users = [
  { id: 1, name: 'Aiman', email: 'aiman@gmail.com' },
  { id: 2, name: 'Maheen', email: 'maheen@yahoo.com' },
  { id: 3, name: 'Rutaba', email: 'rutaba@gmail.com' },
];

ReactDOM.render(<UserList users={users} />, document.getElementById('root'));
