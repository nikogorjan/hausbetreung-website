import React from 'react'
import './Footer.css'
import '../../../globals.css'

const Footer = () => {
    return (
        <>
            <div className='footer-main'>
                <div className='footer-wrapper'>

                    <div className='footer-first-row'>
                        <div className='logo-cell'>
                            <img src="/images/logo1.svg" className='logo-img' alt='heros' />

                        </div>
                        <div className='navigationss-wrapper'>
                            <div className='navigation-cell'>
                                <h6 className='heading-desktop-h6'>O nas</h6>
                                <p className='text-regular-normal'>Kontakt</p>
                                <p className='text-regular-normal'>FAQ</p>
                                <p className='text-regular-normal'>Blog</p>
                                <p className='text-regular-normal'>Mnenja strank</p>

                            </div>

                            <div className='navigation-cell'>
                                <h6 className='heading-desktop-h6'>Storitve</h6>
                                <p className='text-regular-normal'>Komercialno čiščenje</p>
                                <p className='text-regular-normal'>Globinsko čiščenje</p>

                            </div>

                            <div className='navigation-cell'>
                                <h6 className='heading-desktop-h6'>Dokumenti</h6>
                                <p className='text-regular-normal'>Pogoji uporabe</p>

                            </div>
                        </div>
                        <div className='subscribe-wrapper'>
                            <h6 className='heading-desktop-h6'>Naroči se</h6>
                            <p className='text-regular-normal'>Ne zamudi pomembnih novic</p>
                            <div className='input-rowww'>
                                <input type='email' placeholder='Vnesi svoj e-naslov' className='email-inputt full-width' />
                                <div className='hero-button black-button button-maring outlined-button marginleft blackbg full-mg'>Naroči</div>

                            </div>
                            <p className='oppozorilio'>Z naročnino potrdite, da se strinjate s pogoji uporabe in dovolite, da vam pošiljava obvestila o novicah.</p>
                        </div>
                    </div>

                    <div className='footer-separator'></div>

                    <div className='footer-second-row'>
                        <div className='last-foot-row'>
                            <p className='oppozorilio'>© Cleaning Service Coaching vse pravice pridržane.</p>

                            <div className='socials-icons-row'>
                            <img src="/images/Facebook.svg" className='relume-social-icon' alt='heros' />
                            <img src="/images/Instagram.svg" className='relume-social-icon' alt='heros' />

                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Footer
