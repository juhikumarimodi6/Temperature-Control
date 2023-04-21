import React from "react"
import './App.css';

function App() {

  const [temperature, setTemperature] = React.useState(0)

function increment() {
  setTemperature(prevTemp => {
    return prevTemp + 1;
  })
}

function decrement() {
  setTemperature(prevTemp => {
    return prevTemp - 1;
  })
}
// let color;
function handleColor() {
  return temperature <= 15 ? {backgroundColor:"aqua"} : 
          temperature > 15 && temperature <= 40 ? 
            {backgroundColor:"orange"} : 
              {backgroundColor:"red"}

  // if(temperature <= 15) {
  //   color = {backgroundColor:"aqua"};
  // } else if (temperature > 15 && temperature <= 40) {
  //   color = {backgroundColor:"orange"};
  // } else {
  //   color = {backgroundColor:"red"}
  // }
  // return color;
}

  return (
    <div className='app-container'>
      <div className='temperature' style = {handleColor()} >
        <h1>{temperature}&deg;C</h1>
      </div>
      <div className='button-container'>
        <button onClick = {increment} className='button'>+</button>
        <button onClick = {decrement} className='button'>-</button>
      </div>
    </div>
  );
}

export default App;
