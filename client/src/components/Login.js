import React from "react";

function Login() {
  return (
    <form action="/">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
