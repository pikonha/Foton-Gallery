import React from "react";
import "./App.css";

import Nav from "./components/Navbar";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  );
}

export default App;
