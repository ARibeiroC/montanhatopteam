import React from 'react'
import './Logotipo.css'
import TextImage from './img/text-montanha-white.png'
import Logo from './img/logo-mountain-shadow-white.png'

function Logotipo() {
  return (
    <div className="logo">
        <img id='img-logo' src={Logo} alt="Logo MONTANHA TOP TEAM" />
        <img id='text-logo' src={TextImage} alt="texto Montanha da logo" />
    </div>
  )
}

export {Logotipo}