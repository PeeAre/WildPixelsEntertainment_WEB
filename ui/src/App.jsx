import React from "react";
import "./App.scss";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <div className="main-wrapper"></div>
      </main>
    </div>
  );
}

export default App;
