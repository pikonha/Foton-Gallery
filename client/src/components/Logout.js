import React, { useEffect } from "react";
import styled from "styled-components";

import { logout } from "../services/auth";

const StyledContainer = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Logout() {
  useEffect(() => {
    logout();
  }, []);

  return (
    <StyledContainer>
      <h1>Logout</h1>
      <button>
        <a href="/"> Home</a>
      </button>
    </StyledContainer>
  );
}

export default Logout;
