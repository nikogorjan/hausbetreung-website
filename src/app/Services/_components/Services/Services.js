'use client'

import React, { useRef, useEffect } from 'react';import '../../../globals.css'
import './Bullets.css'

const Services = () => {

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
        <div className='services-main'>
            <div className='services-wrapper'>
                <div className='center-headers'>
                    <div className='header-wrapped st-et'>
                        <p className='text-regular-semibold   nomr'>
                        Dienstleistungen</p>
                    </div>
                    <div className='header-wrapper'>
                        <h3 className='heading-desktop-h3 black margintop' >Unsere Dienstleistungen</h3>
                    </div>

                    <div className='header-wrapper'>
                        <h3 className='text-medium-normal black margintop' >Wir bieten alle Arten von Reinigungsdiensten an.</h3>
                    </div>
                </div>



                <div className='services-main-wrapper'>
                    <div className='services-left'>
                        <div className='services-cell'>
                            <div className='regular-img-holder'>
                                <img src='/images/s1.webp' alt='cleaning icon' className='service-img' />
                            </div>

                            <h2 className='service-header'>Wohnungsreinigung</h2>
                            <p className='service-header-paragraph'>
                            Gründliche Reinigung für ein frisches und gesundes Zuhause.</p>
                            <div className='arrow-right-row' onClick={() => handleNavigation('/Booking')}>
                                <p className='arrow-paragraph'>Reservierung</p>
                                <img src='/images/right-arrow-altg.svg' alt='cleaning icon' className='arrow-img' />

                            </div>
                        </div>

                        <div className='services-cell'>
                            <div className='regular-img-holder'>
                                <img src='/images/s3.webp' alt='cleaning icon' className='service-img' />
                            </div>

                            <h2 className='service-header'>Reinigung von zugänglichen Fenstern</h2>
                            <p className='service-header-paragraph'>Kristallklare Fenster für eine klare Sicht.</p>
                            <div className='arrow-right-row' onClick={() => handleNavigation('/Booking')}>
                                <p className='arrow-paragraph'>Reservierung</p>
                                <img src='/images/right-arrow-altg.svg' alt='cleaning icon' className='arrow-img' />

                            </div>
                        </div>

                        <div className='services-cell'>
                            <div className='higher-img-holder'>
                                <img src='/images/s5.webp' alt='cleaning icon' className='service-img' />
                            </div>

                            <h2 className='service-header'>Regelmäßige wöchentliche Reinigung</h2>
                            <p className='service-header-paragraph'>Ihr Zuhause immer sauber mit unseren wöchentlichen Dienstleistungen.</p>
                            <div className='arrow-right-row' onClick={() => handleNavigation('/Booking')}>
                                <p className='arrow-paragraph'>Reservierung</p>
                                <img src='/images/right-arrow-altg.svg' alt='cleaning icon' className='arrow-img' />

                            </div>
                        </div>

                        <div className='services-cell'>
                            <div className='regular-img-holder'>
                                <img src='/images/s7.webp' alt='cleaning icon' className='service-img' />
                            </div>

                            <h2 className='service-header'>Kleidung bügeln</h2>
                            <p className='service-header-paragraph'>Professionelles Bügeln für makellos gepflegte Kleidung.</p>
                            <div className='arrow-right-row' onClick={() => handleNavigation('/Booking')}>
                                <p className='arrow-paragraph'>Reservierung</p>
                                <img src='/images/right-arrow-altg.svg' alt='cleaning icon' className='arrow-img' />

                            </div>
                        </div>

                        <div className='services-cell'>
                            <div className='regular-img-holder'>
                                <img src='/images/s9.webp' alt='cleaning icon' className='service-img' />
                            </div>

                            <h2 className='service-header'>Tier- und Hausbetreuung während Ihres Urlaubs</h2>
                            <p className='service-header-paragraph'>Zuverlässige Betreuung Ihres Zuhauses und Ihrer Haustiere während Ihrer Abwesenheit.</p>
                            <div className='arrow-right-row' onClick={() => handleNavigation('/Booking')}>
                                <p className='arrow-paragraph'>Reservierung</p>
                                <img src='/images/right-arrow-altg.svg' alt='cleaning icon' className='arrow-img' />

                            </div>
                        </div>
                    </div>

                    <div className='services-right'>
                        <div className='services-cell'>
                            <div className='higher-img-holder'>
                                <img src='/images/s2.webp' alt='cleaning icon' className='service-img' />
                            </div>

                            <h2 className='service-header'>Büroreinigung</h2>
                            <p className='service-header-paragraph'>Fachgerechte Reinigung für eine produktive Arbeitsumgebung</p>
                            <div className='arrow-right-row' onClick={() => handleNavigation('/Booking')}>
                                <p className='arrow-paragraph'>Reservierung</p>
                                <img src='/images/right-arrow-altg.svg' alt='cleaning icon' className='arrow-img' />

                            </div>
                        </div>

                        <div className='services-cell'>
                            <div className='regular-img-holder'>
                                <img src='/images/s4.webp' alt='cleaning icon' className='service-img' />
                            </div>

                            <h2 className='service-header'>Reinigung von Mehrfamilienhäusern</h2>
                            <p className='service-header-paragraph'>Zuverlässige Reinigung für gepflegte Gemeinschaftsunterkünfte.</p>
                            <div className='arrow-right-row' onClick={() => handleNavigation('/Booking')}>
                                <p className='arrow-paragraph'>Reservierung</p>
                                <img src='/images/right-arrow-altg.svg' alt='cleaning icon' className='arrow-img' />

                            </div>
                        </div>

                        <div className='services-cell'>
                            <div className='regular-img-holder'>
                                <img src='/images/s6.webp' alt='cleaning icon' className='service-img' />
                            </div>

                            <h2 className='service-header'>Reinigung nach dem Umzug</h2>
                            <p className='service-header-paragraph'>Gründliche Reinigung für einen frischen Start in Ihrem neuen Zuhause</p>
                            <div className='arrow-right-row' onClick={() => handleNavigation('/Booking')}>
                                <p className='arrow-paragraph'>Reservierung</p>
                                <img src='/images/right-arrow-altg.svg' alt='cleaning icon' className='arrow-img' />

                            </div>
                        </div>

                        <div className='services-cell last-cell'>
                            <div className='higher-img-holder'>
                                <img src='/images/s8.webp' alt='cleaning icon' className='service-img' />
                            </div>

                            <h2 className='service-header'>Wäsche waschen</h2>
                            <p className='service-header-paragraph'>Professionelle Pflege Ihrer Wäsche für Frische und Sauberkeit</p>
                            <div className='arrow-right-row' onClick={() => handleNavigation('/Booking')}>
                                <p className='arrow-paragraph'>Reservierung</p>
                                <img src='/images/right-arrow-altg.svg' alt='cleaning icon' className='arrow-img' />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
