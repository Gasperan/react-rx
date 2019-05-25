import React from 'react';
import './App.css';
import {Observable} from './Observable';
import {Observer} from './Observer';

function App() {
  return (
    <div className="App">
      <Observable/>
      <Observer/>
    </div>
  );
}

export default App;
