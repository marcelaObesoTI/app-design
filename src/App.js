import "./App.css";
import React, { useState, useEffect} from "react";


function App() {
  const colorPicker = () => {
    return `#${Math.random().toString(16).substr(-6)}`;
  };
  let newColor = colorPicker();
  const [color, setColor] = useState('#6cebe2');
  useEffect(() => {
    document.body.style.backgroundColor = color
  },[color])

  return (
    <div className="App">
      <header className="App-header" >
        <h1>Miaw there</h1>
        <button onClick={()=>{setColor(newColor)}}>Change background</button>
      </header>
    </div>
  );
}

export default App;
