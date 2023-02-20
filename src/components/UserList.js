import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <div className='userList'>
        {users.map(user => (
            <div key={user.id} className='user'>
            <h3>{user.name}</h3>
            <div id='content'><h4>Username:</h4>
            <p> {user.username}</p></div>
            <div id='content'><h4>Email:</h4>
            <p> {user.email}</p></div>
            <div id='content'><h4>Phone: </h4>
            <p>{user.phone}</p></div>
            <div id='content'> <h4>Website: </h4>
            <p>{user.website}</p></div>
            <div id='content'> <h4>Address: </h4>
            <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p></div>
            <div id='content'><h4>Company: </h4>
            <p>{user.company.name}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
