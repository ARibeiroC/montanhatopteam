import React from 'react'
import './Header.css'
import {BeltInfo} from './BeltInfo'
import {Hamb} from './Hamb'
import { MyMenu } from './MyMenu'
import {Logotipo} from './Logotipo'

function Header() {
  return (
    <header>
      <BeltInfo />
      <nav>
        <Logotipo />
        <MyMenu />
      </nav>
    </header>
  )
}

export {Header}