import React, { useState } from "react";

export const Login = (props) =>{
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("handle");
    if (storedUser) {
      const handle = JSON.parse(storedUser);
      if (email === handle.email && pass === handle.pass) {
        console.log("Login successful");
      } else {
        setError("Invalid Email or Password");
        console.log(email);
      } 
    } else {
      setError("No user found");
    }
    
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <button
        className="link-btn" onClick={() => props.onFormSwitch('register')}>
        Don't have an account? Register here.

      </button>
    </div>
  );
}
