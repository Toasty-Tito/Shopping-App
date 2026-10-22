import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState(5)

  function enterKey(e) {
    if (e.key == "Enter"){
      setColor(document.getElementById("yolo").value);
    }
  }

  return (
    <>

    <h1 style={{backgroundColor:`${color}`}}>Hello World</h1>
    <h2>This is a smaller header</h2>
    <input onKeyDown={enterKey} id='yolo' type='search' placeholder='Search' style={{borderRadius:'10px'}}></input>


    </>
  )
}

export default App
