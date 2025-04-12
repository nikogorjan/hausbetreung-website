

'use client'


import React from 'react'
import './BlogHead.css'

const BlogHead = () => {

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
        <div className='blog-head-main'>
            <div className='blog-head-wrapper'>
                <div className='blog-headers-wrapper'>
                    <div className='blog-header-wrapper black st-et'>
                        <p className='text-regular-semibold  black '>Blog</p>
                    </div>
                    <div className='blog-header-wrapper'>
                        <h3 className='heading-desktop-h3 black ' >Lesen Sie die Blog-Beiträge über verschiedene Methoden zur Reinigung und Verschönerung Ihres Raums!</h3>
                    </div>

                    <div className='blog-header-wrapper'>
                        <h3 className='text-medium-normal  black'>Entdecken Sie Tipps, Tricks und professionelle Empfehlungen.</h3>
                    </div>
                </div>


                <div className='trending-header'>
                    <div className='trending-left'>
                        <div className='program-img-wrapper'>
                            <img src="/images/b1.webp" className='trending-img' alt='beginner' onClick={() => handleNavigation('/Blog/nasveti-za-ciscenje-doma')} />
                        </div>
                    </div>
                    <div className='trending-right'>
                        <div className='blog-headers-wrapper full-headers-wrapper'>

                            <div className='highlighted-row'>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Reinigungstipps

                                    </p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Hausreinigung</p>
                                </div>
                            </div>

                            <div className='blog-header-wrapper'>
                                <h3 className='heading-desktop-h3 black ' >Tipps für eine effektive Hausreinigung
                                </h3>
                            </div>

                            <div className='blog-header-wrapper'>
                                <h3 className='text-medium-normal  black'>5 einfache Schritte für ein makellos sauberes Zuhause.</h3>
                            </div>

                            <div className='read-more-row' onClick={() => handleNavigation('/Blog/nasveti-za-ciscenje-doma')}>
                                <p className='preberi-vec-text black bbc' >Erfahren Sie mehr</p>
                                <img src="/images/right-arrow-altg.svg" alt="cleaning icon" className="arrow-img" />
                            </div>

                        </div>
                    </div>

                </div>


                {/*<div className='blog-sorter-row'>
                    <div className='highlighted-row'>
                        <div className='blog-header-wrapper black highlighted-gray'>
                            <p className='text-regular-semibold  nomargins'>nasveti za čiščenje</p>
                        </div>
                        <div className='blog-header-wrapper black non-highlighted-gray'>
                            <p className='text-regular-semibold  nomargins'>čiščenje doma</p>
                        </div>
                        <div className='blog-header-wrapper black non-highlighted-gray'>
                            <p className='text-regular-semibold  nomargins'>vzdrževanje čistoče</p>
                        </div>
                        <div className='blog-header-wrapper black non-highlighted-gray'>
                            <p className='text-regular-semibold  nomargins'>profesionalno čiščenje</p>
                        </div>
                        <div className='blog-header-wrapper black non-highlighted-gray'>
                            <p className='text-regular-semibold  nomargins'>prenova</p>
                        </div>
                        <div className='blog-header-wrapper black non-highlighted-gray'>
                            <p className='text-regular-semibold  nomargins'>pospravljanje</p>
                        </div>
                    </div>
                </div>*/}

                <div className='blog-all'>
                    <div className='programi-row'>
                        <div className='program-cell opacity-cell' >
                            <div className='program-img-wrapper'>
                                <img src="/images/b1.webp" className='program-img' alt='beginner' onClick={() => handleNavigation('/Blog/nasveti-za-ciscenje-doma')} />
                            </div>
                            <div className='ontopmrgin'></div>
                            <div className='highlighted-row'>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>
                                    Reinigungstipps</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Hausreinigung</p>
                                </div>
                            </div>

                            <h4 className='program-header black'>Tipps für eine effektive Hausreinigung</h4>
                            <h3 className='text-medium-normal black' >5 einfache Schritte für ein makellos sauberes Zuhause.</h3>
                            <div className='read-more-row' onClick={() => handleNavigation('/Blog/nasveti-za-ciscenje-doma')}>
                                <p className='preberi-vec-text highlighted-header'>Erfahren Sie mehr</p>
                                <img src="/images/right-arrow-altg.svg" alt="cleaning icon" className="arrow-img" />
                            </div>
                        </div>

                        <div className='program-cell opacity-cell'>
                            <div className='program-img-wrapper'>
                                <img src="/images/b2.webp" className='program-img' alt='intermediate' onClick={() => handleNavigation('/Blog/cist-poslovni-prostor')} />
                            </div>

                            <div className='ontopmrgin'></div>
                            <div className='highlighted-row'>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Sauberkeitserhaltung</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Professionelle Reinigung</p>
                                </div>
                            </div>
                            <h4 className='program-header black'>Wie Sie Ihren Geschäftsraum sauber halten</h4>
                            <h3 className='text-medium-normal black' >
                            Ein sauberer Raum für bessere Produktivität.</h3>
                            <div className='read-more-row' onClick={() => handleNavigation('/Blog/cist-poslovni-prostor')}>
                                <p className='preberi-vec-text highlighted-header'>Erfahren Sie mehr</p>
                                <img src="/images/right-arrow-altg.svg" alt="cleaning icon" className="arrow-img" />
                            </div>
                        </div>

                        <div className='program-cell opacity-cell' >
                            <div className='program-img-wrapper'>
                                <img src="/images/b3.webp" className='program-img' alt='advanced' onClick={() => handleNavigation('/Blog/ciscenje-po-prenovi')} />
                            </div>

                            <div className='ontopmrgin'></div>
                            <div className='highlighted-row'>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Renovierung</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Aufräumen</p>
                                </div>

                            </div>
                            <h4 className='program-header black'>Reinigung nach Renovierung – wie geht man vor?</h4>
                            <h3 className='text-medium-normal black' >Schritte für eine effektive Reinigung nach der Renovierung.</h3>
                            <div className='read-more-row' onClick={() => handleNavigation('/Blog/ciscenje-po-prenovi')}>
                                <p className='preberi-vec-text highlighted-header'>Erfahren Sie mehr</p>
                                <img src="/images/right-arrow-altg.svg" alt="cleaning icon" className="arrow-img" />
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

        </div>
    )
}

export default BlogHead
