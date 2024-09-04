import React from 'react'
import './Logotipo.css'
import logoImage from '../img/logo-mountain-shadow-white.png'
import textImage from '../img/text-montanha-white.png'

function Logotipo() {
  return (
    <div className="logo">
        <img src={logoImage} alt="Logo MONTANHA TOP TEAM" id='img-logo'/>
        <img src={textImage} alt="texto Montanha da logo" id='text-logo' />
    </div>
  )
}

export {Logotipo}