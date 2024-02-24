import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react";


function App() {
 const [jokes,setjokes]=useState([]);
 useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setjokes(response.data)
  }
  )
  .catch((error)=>{
    console.log(error)
  }
  )

 })
 

  return (
    <div className="body">
    <h1>
    Full stack 
    </h1>
    <p >jokes:{jokes.length}</p>
    {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </div>
  )
}

export default App
