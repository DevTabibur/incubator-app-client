import React, { useEffect, useState } from 'react';
import './ManageItem.css';

const ManageItem = () => {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:5000/add-item')
    .then(res=>res.json())
    .then(data => setUsers(data));
  }, [])


  const handleDelete = id =>{
    const proceed = window.confirm("are you want to delete?")
    if(proceed){
      const url = `http://localhost:5000/add-item/${id}`
      fetch(url, {
        method: "DELETE"
      })
      .then(res=>res.json())
      .then(data=> {
        console.log(data)
        if(data.deletedCount > 0){
          console.log('deleted');
          const remaining = users.filter(user => user._id !== id);
          setUsers(remaining);
        }
      })

    }

  }

  return (
    <div>
      <h1>ManageInventory</h1>
      <h2>Here Loading the backend data and removing data from the ui + backend </h2>
      {
        users.map( user => <li key={user._id}>
        {user.name} :: {user.mail} <button onClick={()=>handleDelete(user._id)}>X</button>
        </li>)
      }
    </div>
  )
}

export default ManageItem;