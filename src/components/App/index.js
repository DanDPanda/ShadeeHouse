import React from "react";
import Header from "../Header";
import About from "../About";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "sans-serif",
        padding: "15px"
        // backgroundColor: "#f5f5dc"
      }}
    >
      <Header />
      <About />
    </div>
  );
}

export default App;
