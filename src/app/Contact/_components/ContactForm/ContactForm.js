'use client'

import React, { useState } from 'react'
import '../../../globals.css'

const ContactForm = () => {
    const [formState, setFormState] = useState({ email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });

        const result = await res.json();
        if (result.success) {
            setFormStatus('Sporočilo poslano uspešno!');
        } else {
            setFormStatus('Prišlo je do napake pri pošiljanju, vaše vprašanje pošljite na: vprasanje@horion.si');
        }
    };
    return (
        <section>
            <div className='contact-form-main' id='formid'>
                <div className='contact-form-wrapper'>
                    <div className='your-email-wrapper'>
                        <div className='alignmemid'>
                            <div className='header-wrapped st-et mbfg'><p className="text-regular-semibold   nomr">Schicken Sie eine Anfrage.</p></div>
                            <h3 className="heading-desktop-h3 black margintop">Vertrauen Sie uns!</h3>
                            <p className='text-medium-normal centerme'>Senden Sie uns Ihre Frage, und ein Spezialist aus Ihrem Bereich wird Ihnen so schnell wie möglich antworten.</p>
                        </div>

                        <div className='q-form-row'>
                            <div className='q-left'>
                                <div className='question-form' >
                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor='email'>E-Mail-Adresse</label>
                                        <input type='email' id='email' name='email' required value={formState.email} onChange={handleInputChange} />
                                        <label htmlFor='message'>Nachricht</label>
                                        <textarea id='message' name='message' rows='5' required value={formState.message} onChange={handleInputChange}></textarea>
                                        <button type='submit' className='dark-button mgtop'>Absenden</button>
                                    </form>
                                    {formStatus && <p>{formStatus}</p>}
                                </div>
                            </div>
                            <div className='q-right'>
                                <img src="/images/contactimg.webp" className='con-img' alt='heros' />

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
