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
      <div className="container p-3">
        <h1 className='text-center'>THe best actors:</h1>
        <div className="row">
          <div className="col-4">colonna</div>
          <div className="col-4">colonna</div>
          <div className="col-4">colonna</div>
          <div className="col-4">colonna</div>
          <div className="col-4">colonna</div>
          <div className="col-4">colonna</div>
        </div>
      </div>
    </>
  )
}

export default App
