import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  color: white;
  background: #999;
`;

const NavLinksStyle = styled.ul`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  font-size: 20px;
`;

function Navbar() {
  return (
    <NavStyle>
      <Link to="/">
        <h3>Logo</h3>
      </Link>

      <NavLinksStyle>
        <Link to="/profile">
          <li>Profile</li>
        </Link>

        <li>Logout</li>
      </NavLinksStyle>
    </NavStyle>
  );
}

export default Navbar;
