'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'; // Import Link from next/link
import './navbar.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen === false) {
      setIsMenuOpen(!isMenuOpen);
    }
    else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleNavigation = (target) => {
    // Toggle the menu first
    toggleMenu();

    window.location.href = `${target}`;
  };

  const navigateToPage = () => {
    window.location.href = '/dokumentacija/prva-menstruacija';
  };

  const addAnimationClasses = () => {
    document.querySelectorAll('.dissapear_layer')[0].classList.add('first-diss');
    document.querySelectorAll('.dissapear_layer')[1].classList.add('second-diss');
    document.querySelectorAll('.dissapear_layer')[2].classList.add('third-diss');
  };

  const handleNavigation2 = (target) => {
    // Add animation classes
    addAnimationClasses();

    // Delay the navigation to allow the animation to complete
    setTimeout(() => {
      window.location.href = `${target}`;
    }, 500);
  };


  return (
    <>
      <div className='navbar-main'>



        <div className='navbar-row '>
          <div className='empty-wrapper'>
            <div className='hidden-logo-wrapper'>
              <img alt='logo' className='logo-img' src='/images/logo2.svg' onClick={() => handleNavigation2('/')} />
            </div>

            <div className='navigations-horion-wrapper'>
              <p onClick={() => handleNavigation2('/Services')} className='horion-navigation'>Dienstleistungen</p>

              <p className='horion-navigation' onClick={() => handleNavigation2('/About')}>
                Über uns
              </p>

              <p className='horion-navigation' onClick={() => handleNavigation2('/Contact')}>
                Kontakt
              </p>

              <p className='horion-navigation' onClick={() => handleNavigation2('/Booking')}>
                Reservierung
              </p>
              <p className='horion-navigation' onClick={() => handleNavigation2('/Blog')}>
                Blog
              </p>
              <p className='horion-navigation' onClick={() => handleNavigation2('/')}>
                Startseite
              </p>
            </div>


          </div>

          <div className='icons-wrapper'>





            {/* <button className='horion-contact-button'>Kontakt</button>*/}
            <button className='dark-button' onClick={() => handleNavigation2('/Booking')}>Reservierung</button>

          </div>

          <div className='menu-icon' onClick={toggleMenu}>
            <div className={`menu-bar ${isMenuOpen ? 'bar1' : ''}`}></div>
            <div className={`menu-bar ${isMenuOpen ? 'bar2' : ''}`}></div>
          </div>

        </div>


        <div className='navigator-wrapper'>
          <div className='dissapear_layer blue'></div>
          <div className='dissapear_layer white'></div>
          <div className='dissapear_layer white'></div>

        </div>


        <div className={`memenu ${isMenuOpen ? 'show-menu' : ''}`}>
          <div className='navigationsopen-wraper'>

            <div className='nav-open-wrapper' onClick={() => handleNavigation2('/Services')}>
              <p className='navigationopen'  >Dienstleistungen</p>
              <div className='arrow-right'></div>
            </div>
            <div className='nav-open-wrapper' onClick={() => handleNavigation2('/About')}>
              <p className='navigationopen'>Über uns</p>
              <div className='arrow-right'></div>
            </div>
            <div className='nav-open-wrapper' onClick={() => handleNavigation2('/Contact')}>
              <div ><p className='navigationopen'>Kontakt</p></div>
              <div className='arrow-right'></div>
            </div>
            <div className='nav-open-wrapper' onClick={() => handleNavigation2('/Booking')}>
              <div ><p className='navigationopen'>Reservierung</p></div>
              <div className='arrow-right'></div>
            </div>
            <div className='nav-open-wrapper' onClick={() => handleNavigation2('/Blog')}>
              <div ><p className='navigationopen'>Blog</p></div>
              <div className='arrow-right'></div>
            </div>
            <div className='nav-open-wrapper' onClick={() => handleNavigation2('/')}>
              <div ><p className='navigationopen'>Startseite</p></div>
              <div className='arrow-right'></div>
            </div>



          </div>
        </div>




      </div>

    </>
  )
}

export default Navbar
