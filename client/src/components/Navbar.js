import React from "react";
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  color: white;
  background: #999;

  a {
    text-decoration: inherit;
    color: inherit;
  }

  a:visited {
    text-decoration: inherit;
    color: inherit;
  }
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
      <h3>
        <a href="/">Logo</a>
      </h3>

      <NavLinksStyle>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </NavLinksStyle>
    </NavStyle>
  );
}

export default Navbar;
