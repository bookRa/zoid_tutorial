import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MyWidget from "./widget";

let MyReactWidget = MyWidget.driver('react',{
  React: React,
  ReactDOM: ReactDOM
})

console.log(`Hey this is MyWidget: ${MyReactWidget}`)

function App() {
  let [myThings, changeMyThings] = useState(["burger", "fries"])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          These are my things: {myThings.map((thing, idx) => {
            let randColor = Math.floor(Math.random()*16777215).toString(16);
            console.log(randColor)
            return (<span 
            key={`thing${idx}`} 
            style={{
              color:`#${randColor}`,
              fontWeight: "bold"
            }}
            className="randomThing">{thing}; </span>)
        })}.
        </p>
        <MyReactWidget name="gooboy" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
