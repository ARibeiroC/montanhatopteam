import React, { useEffect, useRef, useState, } from 'react'
import { BsHouseFill, BsChatRightTextFill, BsCalendarDateFill, BsFillPeopleFill, BsClockFill, BsBuildingFill, BsFileTextFill} from "react-icons/bs"
import './Menu.css'

function Menu() {
  const [stateHamb, setStataHamb] = useState('')
  const stateMenu = useRef('')
  const buttonTop = useRef('')
  const buttonMiddle = useRef('')
  const buttonBottom = useRef('')
  const menu = useRef('')
  const home = useRef('')
  const about = useRef('')
  const branches = useRef('')
  const timetables = useRef('')
  const team = useRef('')
  const events = useRef('')
  const faq = useRef('')

  const closeMenu = (element)=> {
    closeMenuToggle()
    element.checked = false
  }

  const openMenuToggle = ()=> {
    buttonTop.current.style.marginTop = '0px'
    buttonTop.current.style.transform = 'rotate(405deg)'
    buttonTop.current.style.backgroundColor = 'red'
    
    buttonMiddle.current.style.opacity = '0'
    buttonMiddle.current.style.backgroundColor = 'red'

    buttonBottom.current.style.marginTop = '0px'
    buttonBottom.current.style.transform = 'rotate(-405deg)'
    buttonBottom.current.style.backgroundColor = 'red'
    

    menu.current.style.opacity = '1'
    menu.current.style.right = '0px'
  }

  const closeMenuToggle = ()=> {
    buttonTop.current.style.marginTop = '-15px'
    buttonTop.current.style.transform = 'rotate(0)'
    buttonTop.current.style.backgroundColor = 'white'
    
    buttonMiddle.current.style.opacity = '1'
    buttonMiddle.current.style.backgroundColor = 'white'

    buttonBottom.current.style.marginTop = '16px'
    buttonBottom.current.style.transform = 'rotate(0)'
    buttonBottom.current.style.backgroundColor = 'white'

    menu.current.style.right = '-100%'
    menu.current.style.opacity = '0'
  }
  
  const currentStateMenu = (element)=>{
    if (element.checked === true){
      openMenuToggle()
    } else {
      closeMenuToggle()
    }
  }

  return (
    <>
      <div className="menu">
        <div className="itens-menu" ref={menu}>
          <a href="#HOME" ref={home} onClick={ e => {closeMenu(stateMenu.current)}}> 
            <BsHouseFill className='icons-menu'/>
            <span>HOME</span>
          </a>
          <a href="#about" ref={about} onClick={ e => {closeMenu(stateMenu.current)}}>
            <BsFileTextFill className='icons-menu'/>
            <span>SOBRE NÓS</span>
          </a>
          <a href="#branches" ref={branches} onClick={ e => {closeMenu(stateMenu.current)}}>
            <BsBuildingFill className='icons-menu'/>
            <span>FILIAIS</span>
          </a>
          <a href="#timetables" ref={timetables} onClick={ e => {closeMenu(stateMenu.current)}}>
            <BsClockFill className='icons-menu' />
            <span>HORÁRIOS</span>
          </a>
          <a href="#team" ref={team} onClick={ e => {closeMenu(stateMenu.current)}}>
            <BsFillPeopleFill className='icons-menu' />
            <span>EQUIPE</span>
          </a>
          <a href="#events" ref={events} onClick={ e => {closeMenu(stateMenu.current)}}>
            <BsCalendarDateFill className='icons-menu' />
            <span>EVENTOS</span>
          </a>
          <a href="#faq" ref={faq} onClick={ e => {closeMenu(stateMenu.current)}}>
            <BsChatRightTextFill className='icons-menu' />
            <span>FAQ's</span>
          </a>
        </div>
      </div>
      <div id="hamb">
          <label className='menu-button-container' htmlFor="menu-toggle" id="menu-toggle-hamb">
              <div className='menu-button-top' ref={buttonTop}></div>
              <div className='menu-button-middle' ref={buttonMiddle}></div>
              <div className='menu-button-bottom' ref={buttonBottom}></div>
              <input id="menu-toggle" type="checkbox" ref={stateMenu} onClick={(e)=>{currentStateMenu(stateMenu.current)}}/>
          </label>
      </div>
    </>
  )
}

export {Menu}