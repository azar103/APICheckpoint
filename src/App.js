import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList';
import axios from 'axios';
function App() {

  const [listOfUser, setListOfUser] = useState([])

  useEffect(() => {
     const fetchUsers = async() => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users')
      setListOfUser(result.data)
   };
   fetchUsers();
}
, [])
  return (
    <UserList users={listOfUser}/>
  );
}

export default App;
