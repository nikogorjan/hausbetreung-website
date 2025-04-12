'use client'

import React, { useRef } from 'react'
import '../../../app/globals.css'
import Bubbles from '../../About/_components/Bubbles/Bubbles'
const Hero = () => {
  const scrollRef = useRef(null); // Reference for the section1 header
  const section2Ref = useRef(null); // Reference for the target section


  const scrollToSection2 = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className='hero-main'>
      <div className='imager'>
        {/*<img src="/images/ooorganize5.svg" className='ooo-img' alt='heros' />*/}


      </div>
      <div className='hero-main-wrapper'>


        <div className='left-side'>
          <div className='headers-wrapper'>

            <div className='header-wrapped st-et nomr'>
              <p className='text-regular-semibold   nomr'>Professionelles Unternehmen</p>
            </div>
            <h1 className='hero-main-header margintop '>
            Wir sind ein Unternehmen, das sich um die Sauberkeit Ihres Hauses und Ihrer Geschäftsräume kümmert!           </h1>
            <p className='hero-main-paragraph margintop boldovan'>
            Wir bieten erstklassige Reinigungsdienste an. Unser Unternehmen stellt sicher, dass Ihr Zuhause immer makellos sauber und frisch ist.

            </p>
            <div className='hero-buttons-row margintop'>
              <button className='dark-button blubr' onClick={() => handleNavigation('/Services')}>Dienstleistungen</button>
              <button className='dark-button marginleft' onClick={() => handleNavigation('/Contact')}>Kontakt</button>
            </div>


          </div>
        </div>


        <div className='right-side'>
          {/*<img src="/images/1b-svg.svg" className='hero-img' alt='heros' />*/}
          <Bubbles />



        </div>


      </div>


      <div className=''>

      </div>



      <div className='navigator-wrapper'>
                <div className='dissapear_layer blue'></div>
                <div className='dissapear_layer white'></div>
                <div className='dissapear_layer white'></div>

            </div>



    </div>
  )
}

export default Hero
