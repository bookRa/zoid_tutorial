import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  let [myWord, changeMyWord] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello I'm a beautiful widget! My name is <code>{props.name || "undefined"}</code>
        </p>
        <input
        value={myWord}
        onChange={e=> changeMyWord(e.target.value)}
        />
        <button
        onClick={()=>props.passDownFunc(myWord)}
        >Pass this word up to parent</button>
      </header>
    </div>
  );
}

export default App;
