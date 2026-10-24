import { useState } from 'react'
import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import './Product.css'
import Product from './Product';

function App() {
  const [color, setColor] = useState()

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

      <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center", gap:"99px", marginTop:"60px"}}>
        <Product image={heroImg} name="Bob the Block" price={12}/>
        <Product image={heroImg} name="Eric the Block" price={15}/>
        <Product image={heroImg} name="Josh the Block" price={21}/>
        <Product image={heroImg} name="Julian the Block" price={9000}/>
      </div>
    </>
  )
}

export default App
