'use client'

import React from 'react'
import '../../../globals.css'

const ContactHero = () => {

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
    <section>
        <div className='contact-header-main'>
            <div className='contact-header-wrapper'>
                <div className='first-row'>
                    <div className='first-left'>
                        <h1 className='service-header-title lefted'>Kontaktieren Sie uns!</h1>
                    </div>

                    <div className='first-right'>
                        <p className='service-header-paragraph'>Wenn Sie Fragen haben oder einen Reinigungstermin vereinbaren möchten, wenden Sie sich bitte über die untenstehenden Kontaktdaten an uns oder <span className='reserva' onClick={() => handleNavigation('/Booking')}>reservieren Sie einen Termin.</span></p>

                    </div>
                </div>

                

            </div>
        </div>


        <div className='navigator-wrapper'>
                <div className='dissapear_layer blue'></div>
                <div className='dissapear_layer white'></div>
                <div className='dissapear_layer white'></div>

            </div>
    </section>
  )
}

export default ContactHero
