import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/login">
          <li>Login</li>
        </Link>

        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
