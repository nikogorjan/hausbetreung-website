'use client'

import React from 'react'
import './Blog.css'
import './Hero.css'


const Blog = () => {

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
        <div className='blog-main'>
            <div className='blog-wrapperr'>
                <div className='blog-online'>
                    <div className='blog-wrapper'>
                        <div className='blog-headers-wrapper'>
                            <div className='header-wrapped st-et'>
                                <p className='text-regular-semibold   nomr'>Blog</p>
                            </div>
                            <div className='blog-header-wrapper'>
                                <h3 className='heading-desktop-h3 black ' >Lesen Sie unsere Neuigkeiten und interessante Tipps zur Reinigung Ihrer Räume.</h3>
                            </div>

                            <div className='blog-header-wrapper'>
                                <h3 className='text-medium-normal  black'>Entdecken Sie Tipps, Tricks und fachkundige Empfehlungen zur Verbesserung Ihres Zuhauses.</h3>
                            </div>
                        </div>

                        <div className='programi-row'>
                            <div className='program-cell opacity-cell' >
                                <div className='program-img-wrapper' onClick={() => handleNavigation('/Blog/nasveti-za-ciscenje-doma')}>
                                    <img src="/images/b1.webp" className='program-img' alt='beginner' />
                                </div>
                                <div className='ontopmrgin'></div>
                                <div className='highlighted-row'>
                                    <div className='blog-header-wrapper black highlighted-gray'>
                                        <p className='text-regular-semibold  nomargins'>Reinigungstipps</p>
                                    </div>
                                    <div className='blog-header-wrapper black highlighted-gray'>
                                        <p className='text-regular-semibold  nomargins'>Hausreinigung</p>
                                    </div>
                                </div>
                                <h4 className='program-header black'>Tipps für eine effektive Hausreinigung</h4>
                                <h3 className='text-medium-normal black' >5 einfache Schritte zu einem makellos sauberen Zuhause</h3>

                            </div>

                            <div className='program-cell opacity-cell'>
                                <div className='program-img-wrapper' onClick={() => handleNavigation('/Blog/cist-poslovni-prostor')} >
                                    <img src="/images/b2.webp" className='program-img' alt='intermediate' />
                                </div>
                                <div className='ontopmrgin'></div>
                                <div className='highlighted-row'>
                                    <div className='blog-header-wrapper black highlighted-gray'>
                                        <p className='text-regular-semibold  nomargins'>Sauberkeit erhalten</p>
                                    </div>
                                    <div className='blog-header-wrapper black highlighted-gray'>
                                        <p className='text-regular-semibold  nomargins'>Professionelle Reinigung</p>
                                    </div>
                                </div>
                                <h4 className='program-header black'>Wie Sie Ihren Geschäftsraum sauber halten</h4>
                                <h3 className='text-medium-normal black' >Sauberer Raum für höhere Produktivität</h3>

                            </div>

                            <div className='program-cell opacity-cell' >
                                <div className='program-img-wrapper'  onClick={() => handleNavigation('/Blog/ciscenje-po-prenovi')}>
                                    <img src="/images/b3.webp" className='program-img' alt='advanced' />
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
                                <h4 className='program-header black'>Reinigung nach der Renovierung - wie geht man vor?</h4>
                                <h3 className='text-medium-normal black' >
                                Schritte für eine effektive Reinigung nach der Renovierung</h3>

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

export default Blog
