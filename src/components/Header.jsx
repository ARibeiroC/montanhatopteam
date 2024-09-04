import React from 'react'
import './Header.css'
import {BeltInfo} from './BeltInfo'
import { Menu } from './Menu'
import {Logotipo} from './Logotipo'

function Header() {
  return (
    <header>
      <BeltInfo />
      <nav>
        <Logotipo />
        <Menu />
      </nav>
    </header>
  )
}

export {Header}