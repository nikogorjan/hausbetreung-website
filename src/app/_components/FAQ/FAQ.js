import React from 'react'
import './FAQ.css'

const FAQ = () => {

    return (
        <div className='faq-main'>
            <div className='faq-wrapper'>
                <div className='faq-left'>
                    <h3 className='heading-desktop-h3 black '>Häufig gestellte Fragen</h3>
                    <p className='text-medium-normal black'>Wir haben alle Antworten auf Ihre Fragen. Von Reinigungstipps bis hin zu Informationen über unsere Dienstleistungen.</p>
                    {/*<button className='dark-button mrgins'>Rezervacija</button>*/}
                </div>
                <div className='faq-right'>
                    <div className='faq'>
                        <div className='thefqwrapper'>
                            <h2 className='faq-h'>Was unterscheidet Ihre Reinigungsdienste von anderen?</h2>
                            <p className='faq-p'>Unser Ansatz ist gründlich und auf Ihre Bedürfnisse zugeschnitten. Wir verwenden umweltfreundliche Produkte und modernste Ausrüstung, um die besten Ergebnisse zu gewährleisten.</p>
                        </div>
                    </div>
                    <div className='faq'>
                        <h2 className='faq-h'>Bieten Sie regelmäßige oder einmalige Reinigungsdienste an?</h2>
                        <p className='faq-p'>Wir bieten sowohl regelmäßige als auch einmalige Reinigungsdienste an, je nach Ihren Bedürfnissen. Wir können wöchentliche, monatliche oder einmalige Reinigungen vereinbaren.</p>
                    </div>
                    <div className='faq'>
                        <h2 className='faq-h'>Verwenden Sie umweltfreundliche Reinigungsprodukte?</h2>
                        <p className='faq-p'>Ja, wir verwenden nur umweltfreundliche Reinigungsprodukte, die sicher für Sie, Ihre Haustiere und die Umwelt sind.</p>
                    </div>
                    <div className='faq'>
                        <h2 className='faq-h'>Wie reserviere ich Ihre Dienstleistungen?</h2>
                        <p className='faq-p'>Sie können unsere Dienstleistungen über unsere Webseite reservieren oder uns direkt per Telefon oder E-Mail kontaktieren. Wir vereinbaren dann einen Termin, der Ihnen am besten passt.</p>
                    </div>
                    <div className='faq'>
                        <h2 className='faq-h'>Bieten Sie eine Garantie auf Ihre Dienstleistungen an?</h2>
                        <p className='faq-p'>Ja, wir bieten eine Garantie auf unsere Dienstleistungen an. Wenn Sie nicht vollständig zufrieden sind, informieren Sie uns bitte und wir werden das Problem beheben.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ