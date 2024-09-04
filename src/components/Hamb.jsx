import React from "react"
import './Hamb.css'


function Hamb () {
    return (
        <div id="hamb">
            <label className='menu-button-container' htmlFor="menu-toggle">
                <input id="menu-toggle" type="checkbox"/>
                <div className='menu-button-top'></div>
                <div className='menu-button-middle'></div>
                <div className='menu-button-bottom'></div>
            </label>
        </div>
    )
}

export { Hamb }