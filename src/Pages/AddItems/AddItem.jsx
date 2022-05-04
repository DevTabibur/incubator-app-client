import React from 'react';
import './AddItem.css';

const AddItem = () => {

  const handleForm = (e) =>{
    e.preventDefault();
    const name = e.target.fname.value;
    const mail = e.target.email.value;

    const user = {name, mail};
    console.log(user);

    // send data to the server
    fetch('http://localhost:5000/add-item', {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log('success', data)
      alert('user added successfully!');
      e.target.reset();
      
    })
  }


  return (
    <div>
      <h2>Restock the Items</h2>
      <form onSubmit={handleForm}>
        <input type="text" placeholder='name' name='fname' />
        <br />
        <input type="email" placeholder='Email' name='email' />
        <br />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  )
}

export default AddItem;