import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [attori, setAttori] = useState([])


  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
      setAttori(resp.data)
      
    })
  }, [])

  console.log(attori);
  
  return (
    <>
      
    </>
  )
}

export default App
