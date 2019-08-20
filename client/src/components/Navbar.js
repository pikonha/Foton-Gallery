import React from "react";
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
      <h3>Logo</h3>

      <NavLinksStyle>
        <li>Profile</li>
        <li>Logout</li>
      </NavLinksStyle>
    </NavStyle>
  );
}

export default Navbar;
