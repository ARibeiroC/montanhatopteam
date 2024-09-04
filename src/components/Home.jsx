import React from 'react'
import './Home.css'

function Home () {
  return (
      <section id='home'>
        <div className="text">
          <h2><span id='brazilian'>Brazilian</span> | <span id='jiu-jitsu'>Jiu-Jitsu</span></h2>
          <h3>"A arte suave é como poesia, alivia a alma, irradia como a luz do dia, renova as forças e faz do chão o começo de uma VITÓRIA!"</h3>
          <button>Matricule-se</button>
        </div>
      </section>
  )
}

export {Home}