import React from 'react'
import './Menu.css'
import { Hamb } from './Hamb'

function Menu() {
  return (
    <div className="menu">
        <div className="itens-menu">
          <a href="" className="active">HOME</a>
          <a href="">SOBRE NÓS</a>
          <a href="">FILIAIS</a>
          <a href="">HORÁRIOS</a>
          <a href="">EQUIPE</a>
          <a href="">EVENTOS</a>
        </div>
        <Hamb />
    </div>
  )
}

export {Menu}