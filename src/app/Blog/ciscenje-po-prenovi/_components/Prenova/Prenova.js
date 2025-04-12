'use client'


import React from 'react'
import '../../../blogcss.css'
import { Table } from 'antd';

const columns = [
    {
        title: 'Hilfsmittel',
        dataIndex: 'prip',
        key: 'prip',
        width: 150,
    },
    {
        title: 'Bezeichnung',
        dataIndex: 'nam',
        key: 'nam',
        width: 400,
    },
];

const data = [
    { key: 1, prip: 'Industriestaubsauger', nam: 'Entfernung von Staub und Schmutz' },
    { key: 2, prip: 'Tücher und Schwämme', nam: 'Oberflächenreinigung' },
    { key: 3, prip: 'Reinigungsmittel', nam: 'Verschiedene Reinigungsmittel für unterschiedliche Oberflächen' },
    { key: 4, prip: 'Schutzausrüstung', nam: 'Handschuhe, Staubmasken' },

];



const columns2 = [
    {
        title: 'Natürliches Reinigungsmittel',
        dataIndex: 'prip',
        key: 'prip',
        width: 150,
    },
    {
        title: 'Bezeichnung',
        dataIndex: 'nam',
        key: 'nam',
        width: 400,
    },
];

const data2 = [
    { key: 1, prip: 'Essig', nam: 'Desinfektion und Entfernung von Kalkablagerungen' },
    { key: 2, prip: 'Natron', nam: 'Entfernung von Flecken und unangenehmen Gerüchen' },
    { key: 4, prip: 'Zitrone', nam: 'Reinigung und Erfrischung von Oberflächen' },

];


const Prenova = () => {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        const navbarHeight = 74; // Adjust for your navbar height
        if (element) {
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleClick = (id) => {
        scrollTo(id);
    };


    return (
        <div className='blog-post-main'>
            <div className='blog-post-wrapper'>
                <div className='blog-img-wrapper'>
                    <img src="/images/b3.webp" className='blogp-img' alt='beginner' />

                </div>


                <div className='blogp-content-wrapper'>
                    <div className='blog-header-wrapper'>
                        <h3 className='heading-desktop-h3 black ' >Reinigung nach Renovierung – wie geht man vor?</h3>
                    </div>

                    <h3 className='text-medium-normal  black'>Die Renovierung Ihres Hauses oder Geschäftsraums kann aufregend sein, doch nach Abschluss der Arbeiten bleibt oft viel Schmutz und Staub zurück. Die Reinigung nach einer Renovierung kann herausfordernd sein, aber mit den richtigen Schritten können Sie Ihren Raum effektiv reinigen und ihn für die Nutzung vorbereiten.
                    </h3>

                    <h3 className='text-medium-normal  black'>Die Reinigung nach einer Renovierung erfordert Planung und das richtige Werkzeug. Hier sind einige Schritte, die Ihnen bei der effektiven Reinigung helfen werden:
                    </h3>

                    <div className='blog-post-urnik'>
                        <div className='blog-link-wrapper' onClick={() => handleClick('section1')}>
                            <p href="#section1" className='smooth-scroll'  >Vorbereitung auf die Reinigung</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section2')}>
                            <p href="#section2" className='smooth-scroll'>Entfernung von größeren Abfällen und Staub</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section3')}>
                            <p href="#section3" className='smooth-scroll'>Reinigung der Oberflächen</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section4')}>
                            <p href="#section4" className='smooth-scroll'>Gründliche Reinigung</p>

                        </div>


                        <div className='blog-link-wrapper' onClick={() => handleClick('section5')}>
                            <p href="#section5" className='smooth-scroll'>Ökologische Ausrichtung</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section6')}>
                            <p href="#section5" className='smooth-scroll'>Organisation und Aufräumen</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section7')}>
                            <p href="#section5" className='smooth-scroll'>Abschluss</p>

                        </div>
                    </div>


                    <div id="section1" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Vorbereitung auf die Reinigung</h2>
                        <p className='text-medium-normal  black'>Bevor Sie mit der Reinigung beginnen, stellen Sie sicher, dass Sie alle notwendigen Werkzeuge und Reinigungsmittel bereit haben. Hier ist eine Liste der grundlegenden Utensilien:</p>
                        <Table columns={columns} dataSource={data} pagination={false} className='bigtab' />

                    </div>

                    <div id="section2" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Entfernung von größeren Abfällen und Staub</h2>
                        <p className='text-medium-normal  black'>Zuerst entfernen Sie größere Abfälle wie Materialreste, Verpackungen und andere Müllstücke. Verwenden Sie einen Industriestaubsauger, um den Staub und die feinen Partikel zu beseitigen, die sich während der Renovierung angesammelt haben.</p>




                    </div>


                    <div id="section3" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Reinigung der Oberflächen</h2>
                        <p className='text-medium-normal  black'>
                        Nachdem Sie größere Abfälle und Staub entfernt haben, beginnen Sie mit der Reinigung der Oberflächen. Hier sind einige Tipps für verschiedene Oberflächen:</p>




                        <div className='bullet-points-wrapper'>
                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Böden:</span> Saugen Sie die Böden ab und wischen Sie sie, um Staub und Schmutz zu entfernen.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Wände: </span>Wischen Sie die Wände mit einem feuchten Tuch ab, um Staub und Flecken zu entfernen.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Fenster: </span>Reinigen Sie die Fenster mit einem geeigneten Glasreiniger, damit sie glänzen.</p>

                            </div>


                        </div>
                    </div>

                    <div id="section4" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Gründliche Reinigung</h2>
                        <p className='text-medium-normal  black'>Widmen Sie besonders schwierigen Stellen und Details besondere Aufmerksamkeit. Hier sind einige Bereiche, die Sie nicht übersehen sollten:</p>




                        <div className='bullet-points-wrapper'>
                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Elektrische Anlagen und Beleuchtung:</span> Wischen Sie die Lichtschalter, Steckdosen und Beleuchtungskörper ab.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Möbel: </span>Reinigen und desinfizieren Sie alle Möbelstücke.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Belüftungssysteme: </span>Überprüfen und reinigen Sie die Belüftungsöffnungen und Filter.</p>

                            </div>


                        </div>
                    </div>


                    <div id="section5" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Ökologische Ausrichtung</h2>
                        <p className='text-medium-normal  black'>Verwenden Sie bei der Reinigung nach der Renovierung umweltfreundliche Reinigungsmittel, die gesundheits- und umweltfreundlich sind. Hier sind einige natürliche Reinigungsmittel, die Sie verwenden können:</p>
                        <Table columns={columns2} dataSource={data2} pagination={false} className='bigtab' />

                    </div>




                    <div id="section6" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Organisation und Aufräumen</h2>
                        <p className='text-medium-normal  black'>Nach dem Abschluss der Reinigung sorgen Sie für die Organisation und Aufräumung des Raums. Hier sind einige Tipps für Ordnung:</p>




                        <div className='bullet-points-wrapper'>
                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Gestaltung der Räume:</span> 
                                Stellen Sie die Möbel und Ausstattungen an ihren Platz zurück und sorgen Sie dafür, dass alles ordentlich verstaut ist.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>
                                Aufbewahrung der Reinigungsmittel: </span>Bewahren Sie Reinigungsmittel und Werkzeuge an einem trockenen und sicheren Ort auf, damit sie für die nächste Verwendung bereit sind.</p>

                            </div>

                           


                        </div>
                    </div>


                    <div id="section6" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Abschluss</h2>
                        <p className='text-medium-normal  black'>Die Reinigung nach einer Renovierung kann herausfordernd sein, aber mit den richtigen Schritten und einer sorgfältigen Planung können Sie Ihren Raum effektiv reinigen und ihn für die Nutzung vorbereiten. Befolgen Sie unsere Tipps zur Vorbereitung, Abfallbeseitigung, Oberflächenreinigung, gründlichen Reinigung, Verwendung von umweltfreundlichen Reinigungsmitteln sowie zur Organisation und Aufräumung. So wird Ihr Raum makellos sauber und bereit für die weitere Nutzung.</p>
                        <p className='text-medium-normal  black'>Für weitere Tipps und Tricks zur Reinigung Ihres Hauses folgen Sie unserem Blog!

                        </p>


                    </div>

                </div>
            </div>
        </div>

    )
}

export default Prenova
