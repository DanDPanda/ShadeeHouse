import React from "react";
import Header from "../Header";
import About from "../About";
import Cards from "../Cards";

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
      <Cards />
    </div>
  );
}

export default App;
