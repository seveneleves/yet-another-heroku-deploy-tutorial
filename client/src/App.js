import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Preloader } from 'react-materialize';

const App = () => {

  const [welcomeMsg, setWelcomeMsg] = useState("")

  useEffect(() => {
    axios.get('/api/sayhi')
    .then(response => setWelcomeMsg(response.data))
    .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <header className="App-header">
        {
          welcomeMsg === ""
          ? <Preloader
              active
              color="blue"
              flashing={false}
              size="small"
            />
          : <p>
              You have a new message: <br />
              <code>{welcomeMsg}</code>
            </p>
        }
      </header>
    </div>
  );
}

export default App;
