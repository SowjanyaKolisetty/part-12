import React, { useState } from 'react';

function Myform() {
  const [username, setUsername] = useState('Sowjanya');
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'age') {
      setAge(value);
    }
  };

  return (
    <div>
      <h2>Enter your details</h2>
      <h2>Your name is {username} and your age is {age}</h2>
      <form>
        <h1>Enter your name</h1>
        <input type="text" name="username" onChange={handleChange} />
        <h1>Enter your age</h1>
        <input type="text" name="age" onChange={handleChange} />
        <input type="submit" name="save" />
        <br />
        <textarea>This is textarea</textarea>
        <br />
        <select>
          <option value='apple'>Apple</option>
          <option value='grapes'>Grapes</option>
          <option selected='pineapple'>Pineapple</option>
        </select>
        <h3>Upload a file</h3>
        <input type='file' />
        <input type='submit' name='save' />
      </form>
    </div>
  );
}

export default Myform;