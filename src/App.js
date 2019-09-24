import React from 'react';
import './App.css';
import Board from "./components/board";
import GraphButtons from "./components/graph";
import Controls from "./components/controls";


function App() {
  return (
    <div className="App">
      <div className="navigation">
        <div className="nav-items">
          <GraphButtons/>
          <Controls/>
        </div>
      </div>
      <div className="graph-holder" id="graph-holder"/>
      <div className="graph-holder" id="exploration-holder"/>
      <div className="graph-holder" id="solution-holder"/>
      <Board/>
    </div>
  );
}

export default App;
