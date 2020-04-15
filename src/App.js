import React from 'react';
import Header from './Components/Header/Header';
import router from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        {router}
    </div>
  );
}

export default App;
