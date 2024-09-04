import React from 'react'
import './Divider.css'

function Divider() {
  return (
    <section id='divider'>
        <div className='line long'></div>
        <div className='line middle'></div>
        <div className='line small'></div>
    </section>
  )
}

export {Divider}