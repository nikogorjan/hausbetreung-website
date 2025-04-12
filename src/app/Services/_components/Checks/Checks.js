import React from 'react'
import '../../../globals.css'

const Checks = () => {
    return (
        <div className='checks-main'>
            <div className='checks-wrapper'>
                <div className='blog-headers-wrapper'>

                    <div className='blog-header-wrapper'>
                        <h3 className='heading-desktop-h3 black ' >Ihre Zufriedenheit ist garantiert!</h3>
                    </div>

                    <div className='blog-header-wrapper'>
                        <h3 className='text-medium-normal  black'>Warum unsere Dienstleistungen wählen?</h3>
                    </div>
                </div>


                <div className='checks-wrapperr'>
                    <div className='check'>
                        <img src='/images/cool.svg' alt='cleaning icon' className='relume-img' />
                        <h3 className='cell-header mt'>Befreien Sie sich einmal und für immer von den Reinigungsproblemen Ihres Hauses</h3>
                        <p className='stat-paragraphpcc'>
                        Unser Team sorgt für eine gründliche Reinigung Ihres Zuhauses, sodass Sie sich entspannen und Ihre Freizeit genießen können, ohne sich um Haushaltsaufgaben kümmern zu müssen.</p>

                    </div>

                    <div className='check'>
                        <img src='/images/euro.svg' alt='cleaning icon' className='relume-img' />
                        <h3 className='cell-header mt'>Geld-zurück-Garantie</h3>
                        <p className='stat-paragraphpcc'>Wenn Sie mit unseren Dienstleistungen nicht zufrieden sind, erstatten wir Ihnen ohne weitere Fragen Ihr Geld zurück. Ihre Zufriedenheit hat bei uns oberste Priorität.</p>

                    </div>

                    <div className='check'>
                        <img src='/images/pencil.svg' alt='cleaning icon' className='relume-img' />
                        <h3 className='cell-header mt'>Individuell angepasste Reinigungsdienste für Ihr Zuhause, abgestimmt auf Ihre Bedürfnisse und Ihr Budget</h3>
                        <p className='stat-paragraphpcc'>Jede Reinigung wird an Ihre spezifischen Bedürfnisse und Ihr Budget angepasst, um optimale Ergebnisse und vollständige Zufriedenheit zu gewährleisten.</p>

                    </div>

                    <div className='check'>
                        <img src='/images/user-check.svg' alt='cleaning icon' className='relume-img' />
                        <h3 className='cell-header mt'>Wir sind keine Zimmermädchen, sondern ein professionelles Reinigungsunternehmen</h3>
                        <p className='stat-paragraphpcc'>Unsere Dienstleistungen gehen über die gewöhnliche Reinigung hinaus. Wir sind ein professionelles Team, das für eine gründliche und effiziente Reinigung Ihres Hauses oder Büros geschult ist.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checks
