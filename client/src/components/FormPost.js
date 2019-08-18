import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

function FormPost() {
  return (
    <form>
      <textarea placeholder="What is happening..." />
      <button>Send</button>
    </form>
  );
}

export default FormPost;
