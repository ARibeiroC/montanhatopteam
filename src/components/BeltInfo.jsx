import {useEffect, useState} from 'react'
import './BeltInfo.css'


function BeltInfo() {
  const [widthResolution, setWidthResolution] = useState(0)

  useEffect(()=>{
    setWidthResolution(innerWidth)

  },[onload])
  return (
    <div className="belt-info">
        <div className="responsivity">L: {widthResolution}px</div>
        <div className="contacts">
          <a href='#'><i className="fa-solid fa-mobile-screen"></i><span>(11) 91122-3344</span></a>
          <p>Endereço: Rua: Joaquim Silveira, 258 - Jd. Guarani</p>
          <div className='socials'>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <div className="btn-controls">
          <button id="btn-sign-in" className='buttons'>Sign-In</button>
          <button id="btn-sign-up" className='buttons'>Sign-Up</button>
        </div>
    </div>
  )
}

export {BeltInfo}