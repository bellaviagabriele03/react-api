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
      <div className="container">
        <h1 className='text-center my-3'>THe best actors:</h1>


        <div className="row gap-3 justify-content-center">
          {/* dati da prelevare:
          nome
          anno nascita
          nazionalità
          biografia
          immagine
          riconoscimenti */}

          {attori.map((curActor, index) => {
            return (
              <div key={index} className='col-3'>
                <div className="card bg-dark text-white">
                  <img src={curActor.image} alt="" className='card-img-top img-fluid' />
                  <div className="card-body">
                    <p className='card-text'>{curActor.name}</p>
                    <p className="card-text">Anno di nascita: {curActor.birth_year}</p>
                    <p className="card-text">{curActor.nationality}</p>
                    <p className="card-text">{curActor.biography}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
