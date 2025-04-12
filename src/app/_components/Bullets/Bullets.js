'use client'

import React, { useRef, useEffect } from 'react';import './Bullets.css'


const Bullets = () => {



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
    <>
      <div className='motivationn-main'>

        <div className='motivation-wrapper'>
          <div className='center-headers'>
            <div className='header-wrapped st-et'>
              <p className='text-regular-semibold   nomr'>Dienstleistungen</p>
            </div>
            <div className='header-wrapper'>
              <h3 className='heading-desktop-h3 black margintop' >Wohnungsreinigung</h3>
            </div>

            <div className='header-wrapper'>
              <h3 className='text-medium-normal black margintop' >Sie sind nur ein paar Klicks von der Terminreservierung entfernt!</h3>
            </div>
          </div>


          <div className='services-offered-row'>
            <div className='sefvice-cell'>
              <img src="/images/2Z.svg" className="i-icon" alt="heros" />
              <h6 className="heading-desktop-h6 black bigger">Gewerbereinigung</h6>
              <p className="text-medium-normal black">Wir kümmern uns um Ihr Zuhause, Ihre Arbeitsumgebung oder jede andere Einrichtung.</p>
            </div>
            <div className='sefvice-cell'>
              <img src="/images/3z.svg" className="i-icon" alt="heros" />
              <h6 className="heading-desktop-h6 black bigger">Tiefenreinigung</h6>
              <p className="text-medium-normal black">Wir garantieren ein gründliches und makelloses Ergebnis.</p>
            </div>
            <div className='sefvice-cell'>
              <img src="/images/4Z.svg" className="i-icon" alt="heros" />
              <h6 className="heading-desktop-h6 black bigger">Reinigung nach dem Umzug</h6>
              <p className="text-medium-normal black">Lassen Sie uns die Arbeit beim Umzug erleichtern.</p>
            </div>
          </div>


          <div className='allbuttondiv'>
            <button className='dark-button ' onClick={() => handleNavigation('/Services')}>Alle Dienstleistungen</button>

          </div>




        </div>
      </div>


      <div className='navigator-wrapper'>
        <div className='dissapear_layer blue'></div>
        <div className='dissapear_layer white'></div>
        <div className='dissapear_layer white'></div>

      </div>
    </>
  )
}

export default Bullets
