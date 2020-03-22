import React from "react";
import "./App.css";
import FreightCalc from "./components/FreightCalc";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <FreightCalc />
    </div>
  );
}

export default App;
