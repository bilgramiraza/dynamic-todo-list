import { useState } from "react";

export default function Register() {
  const [ name, setName] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName= (e) => {
    setName(e.target.value);
  };

  const handleConfirmPassword= (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister= (e) => {
    e.preventDefault();
    setName('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label>
          <span >Name</span>
          <input type="text" value={name} onChange={handleName}/>
        </label>
        <label>
          <span >Username</span>
          <input type="text" value={username} onChange={handleUsername}/>
        </label>
        <label>
          <span >Password</span>
          <input type="password" value={password} onChange={handlePassword}/>
        </label>
        <label>
          <span >Confirm Password</span>
          <input type="password" value={confirmPassword} onChange={handleConfirmPassword}/>
        </label>
        <button type="submit" disabled={password===confirmPassword}>Register</button>
      </form>
    </div>
  );
}
