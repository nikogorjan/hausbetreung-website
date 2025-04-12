import React from 'react'
import './Contact.css'

const ContactMain = () => {
    return (
        <div className='contact-main'>
            <div className='contact-wrapper'>
                <div className='contact-headers'>
                <div className='teste'>
                <div className='header-wrapped st-et '>
                    <p className='text-regular-semibold  black nomr brbr'>Kontakt</p>
                </div>
                </div>
                    <div className='blog-header-wrapper'>
                        <h3 className='heading-desktop-h3 black ' >Kontaktinformationen</h3>
                    </div>

                    <div className='blog-header-wrapper'>
                        <h3 className='text-medium-normal  black'>Kontaktieren Sie uns</h3>
                    </div>
                </div>

                <div className='contact-row'>
                    <div className='contact-row-left'>
                        <div className='contact-item-holder'>
                            <img src="/images/envelope.svg" className='relume-icon' alt='heros' />
                            <h4 className='program-header black'>E-Mail-Adresse</h4>
                            <h3 className='text-medium-normal black' >Schreiben Sie uns eine Nachricht</h3>
                            <h3 className='text-medium-normal black underline' >info@hausbetreung.at
                            </h3>

                        </div>

                        <div className='contact-item-holder'>
                            <img src="/images/phone.svg" className='relume-icon' alt='heros' />
                            <h4 className='program-header black'>Telefon</h4>
                            <h3 className='text-medium-normal black' >Rufen Sie uns an</h3>
                            <h3 className='text-medium-normal black underline' >0660/822 0540 Lidya</h3>
                            <h3 className='text-medium-normal black underline' >0660/1125 885 Rok</h3>

                        </div>

                        <div className='contact-item-holder'>
                            <img src="/images/map-pin.svg" className='relume-icon' alt='heros' />
                            <h4 className='program-header black'>Standort</h4>
                            <h3 className='text-medium-normal black' >Wir fahren bis zu 35 km</h3>
                            <h3 className='text-medium-normal black underline' >Sankt Kanzian, At</h3>

                        </div>
                    </div>

                    <div className='contact-row-right'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10962.369853051785!2d14.56515767588607!3d46.61505632711572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4770059539a0769d%3A0xe2f5d70ee8927686!2s9122%20%C5%A0kocjan%20v%20Podjuni%2C%20Avstrija!5e0!3m2!1ssl!2ssi!4v1719617698899!5m2!1ssl!2ssi"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className='themap'
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMain
