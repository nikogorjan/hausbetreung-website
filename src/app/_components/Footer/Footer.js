'use client'

import React, { useRef, useEffect } from 'react';
import './Footer.css'

const Footer = () => {

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
            <div className='footer-main'>
                <div className='footer-wrapper'>

                    <div className='footer-first-row'>
                        <div className='logo-cell'>
                            <img src="/images/logo1.svg" className='logo-imgg' alt='heros' />

                        </div>
                        <div className='navigationss-wrapper'>
                            <div className='navigation-cell'>
                                <h6 className='heading-desktop-h6-h lighter'>Informationen</h6>
                                <p className='text-regular-normal cc' onClick={() => handleNavigation('/Contact')}>Kontakt</p>
                                <p className='text-regular-normal cc' onClick={() => handleNavigation('/About')}>Über uns</p>
                                <p className='text-regular-normal cc' onClick={() => handleNavigation('/Blog')}>Blog</p>

                            </div>

                            <div className='navigation-cell'>
                                <h6 className='heading-desktop-h6-h' onClick={() => handleNavigation('/Booking')}>Dienstleistungen</h6>
                                <p className='text-regular-normal cc' onClick={() => handleNavigation('/Booking')}>Wohnungsreinigung</p>
                                <p className='text-regular-normal cc ' onClick={() => handleNavigation('/Booking')}>Büroreinigung</p>
                                <p className='text-regular-normal cc' onClick={() => handleNavigation('/Booking')}>Reinigung von zugänglichen Fenstern</p>
                                <p className='text-regular-normal cc' onClick={() => handleNavigation('/Booking')}>Reinigung von Mehrfamilienhäusern</p>
                                

                            </div>

                            <div className='navigation-cell'>
                                <h6 className='heading-desktop-h6-h' onClick={() => handleNavigation('/Booking')}>Weitere Dienstleistungen</h6>
                                <p className='text-regular-normal cc' onClick={() => handleNavigation('/Booking')}>Regelmäßige wöchentliche Reinigung</p>
                                <p className='text-regular-normal cc' onClick={() => handleNavigation('/Booking')}>Reinigung nach dem Umzug</p>
                                <p className='text-regular-normal cc' onClick={() => handleNavigation('/Booking')}>Bügeln von Kleidung</p>
                                <p className='text-regular-normal cc' onClick={() => handleNavigation('/Booking')}>Wäschewaschen</p>
                                <p className='text-regular-normal cc' onClick={() => handleNavigation('/Booking')}>Tier- und Hausbetreuung während Ihres Urlaubs</p>
                                {/*<p className='text-regular-normal'>Pogoji uporabe</p>*/}

                            </div>

                        </div>
                        <div className='subscribe-wrapper'>
                        <h6 className='heading-desktop-h6'>Firmeninfo</h6>
                            <p className='text-regular-normal'>Lidya Stopar</p>
                            <p className='text-regular-normal'>Beerenweg 2</p>
                            <p className='text-regular-normal'>9122 St.Kanzian/Klopeiner See</p>
                            <p className='text-regular-normal'>GLN:9110036143419</p>
                            <p className='text-regular-normal'>Steuernummer: AT 57 227/7846</p>
                            {/*<h6 className='heading-desktop-h6'>Abonnieren</h6>
                            <div className='input-rowww'>
                                <input type='email' placeholder='Geben Sie Ihre E-Mail-Adresse ein' className='email-inputt full-width' />
                                <div className='hero-button black-button button-maring outlined-button marginleft blackbg full-mg'>Abonnieren</div>

                            </div>
                            <p className='oppozorilio'>Mit Ihrer Anmeldung bestätigen Sie, dass Sie die Nutzungsbedingungen akzeptieren und zustimmen, dass wir Ihnen Benachrichtigungen über Neuigkeiten senden.</p>*/}
                        </div>
                    </div>

                    <div className='footer-separator'></div>

                    <div className='footer-second-row'>
                        <div className='last-foot-row'>
                            <p className='oppozorilio'>© hausbetreung Alle Rechte vorbehalten.</p>

                            <div className='socials-icons-row'>
                            <img src="/images/Facebook.svg" className='relume-social-icon' alt='heros' />
                            <img src="/images/Instagram.svg" className='relume-social-icon' alt='heros' />

                            </div>
                        </div>
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

export default Footer
