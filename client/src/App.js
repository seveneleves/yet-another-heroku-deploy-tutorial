import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {

  useEffect(() => {
    axios.get('/api/sayhi')
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          My favorite number is <code>74916</code>.
        </p>
      </header>
    </div>
  );
}

export default App;
