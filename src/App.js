import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Electron Version: <span id="electron-version"></span><br/>
          Node Version: <span id="node-version"></span><br/>
          Chrome Version: <span id="chrome-version"></span><br/>
        </p>
      </header>
    </div>
  );
}

export default App;
