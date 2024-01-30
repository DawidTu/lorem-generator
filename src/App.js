import data from "./data" 
import { useState } from "react"

const App = () => {

const [count, setCount] = useState(0);
const [text, setText] = useState([]);



const formSubmit = (event) => {
  event.preventDefault()
  let amount = parseInt(count)

  if (amount < 0){
    amount = 1
  } else if (amount > 5){
    amount = 5
  }

setText(data.slice(0, amount))
}



  return (
    <div className="main">
      <h1>Lorem ipsum generator</h1>
      <label>Odstavec: <input type="number" id="name" onChange={(event) => {setCount(event.target.value)}}></input></label>
      <button onClick={formSubmit}>Vygenerovat</button>
    
    <div className="paragraph">
      {
        text.map( (oneText, index) => {
          return <p> {oneText}</p>
        })
     }
    </div>

    </div>
    
  )
}

export default App
