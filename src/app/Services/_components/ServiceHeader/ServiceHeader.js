'use client'


import React from 'react'
import '../../../globals.css'

const ServiceHeader = () => {
  const addAnimationClasses = () => {
    document.querySelectorAll('.dissapear_layer')[0].classList.add('first-diss');
    document.querySelectorAll('.dissapear_layer')[1].classList.add('second-diss');
    document.querySelectorAll('.dissapear_layer')[2].classList.add('third-diss');
  };

const handleNavigation = (targetUrl) => {
    addAnimationClasses();


    

    setTimeout(() => {
        window.location.href = targetUrl;
      }, 500);
};
  return (
    <div className='service-header-main'>
      <div className='service-header-wrapper'>
        <h1 className='service-header-title'>
        Professionelle und zuverlässige <img src='/images/8z.svg' alt='cleaning icon' className='header-icon' /> Reinigungsdienste für Häuser und  <img src='/images/9z.svg' alt='home icon' className='header-icon' /> Unternehmen
        </h1>
        <p className='service-header-paragraph'>Ihr vertrauenswürdiger Partner für gründliche Reinigung und die Aufrechterhaltung der Sauberkeit in Ihrem Zuhause oder Geschäftsräumen.</p>
        <div className='buttons-row'>
          <button className='dark-button blubr' onClick={() => handleNavigation('/Booking')}>Reservierung</button>
          <button className='dark-button marginleft' onClick={() => handleNavigation('/Contact')}>Kontakt</button>
        </div>
      </div>


      <div className='navigator-wrapper'>
                <div className='dissapear_layer blue'></div>
                <div className='dissapear_layer white'></div>
                <div className='dissapear_layer white'></div>

            </div>
    </div>
  )
}

export default ServiceHeader
