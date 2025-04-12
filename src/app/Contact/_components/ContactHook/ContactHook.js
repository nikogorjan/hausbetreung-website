'use client'

import React from 'react'
import '../../../globals.css'


const ContactHook = () => {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };
    
    const handleClick = () => {
        scrollTo('formid');
    };
    return (
        <section>
            <>
                <div className='contact-hook-main'>
                    <div className='contact-hook-wrapper'>
                        <div className='alignmemid'>
                            <h3 className="heading-desktop-h3 black margintop midled">Haben Sie noch Fragen?</h3>
                            <p className='text-medium-normal centerme'>Kontaktieren Sie uns.</p>
                            <button className='dark-button mgtop rowed' onClick={handleClick}>
                                <p className='text-uop'>Verfassen Sie eine Nachricht.</p>
                                <img alt='logo' className='logo-img-up' src='/images/up-arrow-alt.svg' />

                            </button>

                        </div>




                    </div>
                </div>
                <div className='clenhose'>
                    <img alt='logo' className='clen-img-up' src='/images/clen.webp' />
                    <div className='shadoweded'>
                        
                        
                    </div>
                </div>
            </>
        </section>
    )
}


export default ContactHook
