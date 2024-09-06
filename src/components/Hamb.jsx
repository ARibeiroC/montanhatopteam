import React, { useEffect, useState } from "react"
import './Hamb.css'


function Hamb () {
    const [state, setState] = useState()

    // FUNÇÃO DE ABERTURA DO MENU RESPONSIVO
    const openMenuToggle = ()=>{
        const buttonTop = document.querySelector('#hamb .menu-button-container .menu-button-top')
        const buttonMiddle = document.querySelector('#hamb .menu-button-container .menu-button-middle')
        const buttonBottom = document.querySelector('#hamb .menu-button-container .menu-button-bottom')
        const menu = document.querySelector('.menu .itens-menu')

        buttonTop.style.marginTop = '0px'
        buttonTop.style.transform = 'rotate(405deg)'
        buttonTop.style.backgroundColor = 'red'
        
        buttonMiddle.style.opacity = '0'
        buttonMiddle.style.backgroundColor = 'red'
    
        buttonBottom.style.marginTop = '0px'
        buttonBottom.style.transform = 'rotate(-405deg)'
        buttonBottom.style.backgroundColor = 'red'
    
        menu.style.right = '0px'
        menu.style.opacity = '1'
    }

    // FUNÇÃO QUE FECHA O MENU RESPONSIVO
    const closeMenuToggle = ()=>{
        const buttonTop = document.querySelector('#hamb .menu-button-container .menu-button-top')
        const buttonMiddle = document.querySelector('#hamb .menu-button-container .menu-button-middle')
        const buttonBottom = document.querySelector('#hamb .menu-button-container .menu-button-bottom')
        const menu = document.querySelector('.menu .itens-menu')

        buttonTop.style.marginTop = '-15px'
        buttonTop.style.transform = 'rotate(0)'
        buttonTop.style.backgroundColor = 'white'
        
        buttonMiddle.style.opacity = '1'
        buttonMiddle.style.backgroundColor = 'white'
    
        buttonBottom.style.marginTop = '16px'
        buttonBottom.style.transform = 'rotate(0)'
        buttonBottom.style.backgroundColor = 'white'
    
        menu.style.right = '-100%'
        menu.style.opacity = '0'
    }


    const isTrue = (element)=>{
        
        if (element.checked){
            openMenuToggle()
        } else {
            closeMenuToggle()    
        }
        setState(element.checked)
    }

    return (
        <div id="hamb">
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button-top'></div>
                <div className='menu-button-middle'></div>
                <div className='menu-button-bottom'></div>
                <input id="menu-toggle" type="checkbox" onClick={e => {isTrue(e.target)}}/>
            </label>
        </div>
    )
}

export { Hamb }