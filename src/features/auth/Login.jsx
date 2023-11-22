import { useState } from "react";

export default function Login() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin= (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          <span >Username</span>
          <input type="text" value={username} onChange={handleUsername}/>
        </label>
        <label>
          <span >Password</span>
          <input type="password" value={password} onChange={handlePassword}/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
