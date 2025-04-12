'use client'

import React, { useEffect } from 'react'
import './Revealer.css'

const Revealer = () => {
    useEffect(() => {
        const layers = document.querySelectorAll('.revealer_layer');
        if (layers.length === 3) {
          layers[0].classList.add('first-rev');
          layers[1].classList.add('second-rev');
          layers[2].classList.add('third-rev');
        }
      }, []);

  return (
    <div className='navigator-wrapper'>
          <div className='revealer_layer white'></div>
          <div className='revealer_layer blue'></div>
          <div className='revealer_layer white'></div>

        </div>
  )
}

export default Revealer
