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
    
      <div style={{display:'flex', justifyContent:'center'}}>
        <h1 style={{width:"fit-content", padding:"10px", backgroundColor:`${color}`}} >Da Bois Shop</h1>
      </div>

      <div style={{display:'flex', justifyContent:'center'}}>
        <input onKeyDown={enterKey} id='yolo' type='search' placeholder='Search' style={{width:'25%', border:'2px solid black', borderRadius:'20px', padding:'8px'}}></input>
      </div>

    </>
  )
}

export default App
