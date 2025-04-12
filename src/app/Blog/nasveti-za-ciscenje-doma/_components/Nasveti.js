'use client'


import React from 'react'
import '../../blogcss.css'
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
    { key: 1, prip: 'Besen und Kehrschaufel', nam: 'Boden fegen' },
    { key: 2, prip: 'Staubsauger', nam: 'Teppich- und Bodenreinigung' },
    { key: 3, prip: 'Staubtuch', nam: 'Staubwischen' },
    { key: 4, prip: 'Schwamm', nam: 'Oberflächenreinigung' },
    { key: 5, prip: 'Reinigungsmittel', nam: 'Verschiedene Reinigungsmittel für unterschiedliche Oberflächen' },

];


const Nasveti = () => {

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
                    <img src="/images/b1.webp" className='blogp-img' alt='beginner' />

                </div>

                <div className='blogp-content-wrapper'>
                    <div className='blog-header-wrapper'>
                        <h3 className='heading-desktop-h3 black ' >Tipps für eine effektive Hausreinigung</h3>
                    </div>

                    <h3 className='text-medium-normal  black'>Das Sauberhalten und Aufräumen Ihres Hauses kann einfach sein, wenn Sie ein paar grundlegende Schritte befolgen. In diesem Beitrag werden wir fünf grundlegende Schritte für ein makellos sauberes Zuhause sowie einige zusätzliche Reinigungstipps teilen.
                    </h3>


                    <div className='blog-post-urnik'>
                        <div className='blog-link-wrapper' onClick={() => handleClick('section1')}>
                            <p href="#section1" className='smooth-scroll'  >Planung und Organisation</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section2')}>
                            <p href="#section2" className='smooth-scroll'>Vorbereitung von Werkzeugen und Reinigungsmitteln</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section3')}>
                            <p href="#section3" className='smooth-scroll'>Reinigung nach Räumen</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section4')}>
                            <p href="#section4" className='smooth-scroll'>Regelmäßige Wartung</p>

                        </div>


                        <div className='blog-link-wrapper' onClick={() => handleClick('section5')}>
                            <p href="#section5" className='smooth-scroll'>Verwendung von natürlichen Reinigungsmitteln</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section6')}>
                            <p href="#section5" className='smooth-scroll'>Abschluss</p>

                        </div>
                    </div>



                    <div id="section1" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Planung und Organisation</h2>
                        <p className='text-medium-normal  black'>Der erste Schritt zu einer effektiven Reinigung ist die Planung. Organisieren Sie Ihre Zeit und setzen Sie Prioritäten.</p>




                        <div className='bullet-points-wrapper'>
                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Erstellen Sie eine Aufgabenliste:</span> Notieren Sie alles, was Sie reinigen müssen, und legen Sie fest, welche Aufgaben am wichtigsten sind.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Teilen Sie die Aufgaben auf: </span>Wenn Sie mit der Familie oder Mitbewohnern leben, teilen Sie die Aufgaben unter allen Haushaltsmitgliedern auf.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Verwenden Sie einen Timer: </span>Setzen Sie sich eine Zeitgrenze für jede Aufgabe, um konzentriert und effizient zu bleiben.</p>

                            </div>


                        </div>
                    </div>


                    <div id="section2" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Vorbereitung von Werkzeugen und Reinigungsmitteln</h2>
                        <p className='text-medium-normal  black'>Bevor Sie mit dem Reinigen beginnen, bereiten Sie alle notwendigen Werkzeuge und Reinigungsmittel vor. Das spart Zeit und sorgt für bessere Ergebnisse. Hier ist eine Tabelle der grundlegenden Utensilien:</p>
                        <Table columns={columns} dataSource={data} pagination={false} className='bigtab' />

                    </div>

                    <div id="section3" className='transformed-for-link'></div>
                    <div className='target-section'>

                        <div className='target-divider'>
                            <div className='target-left'>
                            <h2 className='heading-desktop-h6 black '> Reinigung nach Räumen</h2>

                                <p className='text-medium-normal  black'>Beginnen Sie mit der Reinigung eines Raums und arbeiten Sie sich dann zum nächsten vor, bis Sie das gesamte Zuhause gereinigt haben. Zum Beispiel: In der Küche reinigen und desinfizieren Sie die Arbeitsflächen, entfernen Sie Flecken und Fett vom Herd, und leeren sowie wischen Sie den Kühlschrank aus. Im Badezimmer reinigen Sie das Waschbecken, die Badewanne und die Dusche und reinigen gründlich die Toilette. Im Wohnzimmer wischen Sie den Staub von Möbeln und Regalen, saugen Sie Teppiche und Böden und reinigen Sie die Fenster.</p>

                            </div>

                            <div className='target-right'>
                                <img src="/images/bl.webp" className='blogger-img' alt='beginner' />

                            </div>
                        </div>

                    </div>

                    <div id="section4" className='transformed-for-link'></div>
                    <div className='target-section'>
                        

                        <div className='target-divider'>
                            <div className='target-left'>
                                <img src="/images/bl1.webp" className='blogger-img' alt='beginner' />

                            </div>

                            <div className='target-right'>
                            <h2 className='heading-desktop-h6 black '>Regelmäßige Wartung</h2>
                                <p className='text-medium-normal  black'>Damit Ihr Zuhause stets sauber und ordentlich bleibt, ist regelmäßige Wartung wichtig. Wischen Sie täglich die Oberflächen ab, räumen Sie das Geschirr weg und saugen Sie die Böden. Reinigen Sie wöchentlich die Badezimmer, wechseln Sie die Bettwäsche und waschen Sie die Wäsche.</p>


                            </div>
                        </div>

                    </div>


                    <div id="section5" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Verwendung von natürlichen Reinigungsmitteln</h2>
                        <p className='text-medium-normal  black'>Die Verwendung von natürlichen Reinigungsmitteln ist umweltfreundlich und gesundheitlich unbedenklich. Natron eignet sich hervorragend zum Entfernen von Flecken und unangenehmen Gerüchen, Essig kann zur Desinfektion und Entfernung von Kalk verwendet werden, und Zitronen sind nützlich für die Reinigung und Erfrischung von Oberflächen.</p>

                    </div>


                    <div id="section6" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Abschluss</h2>
                        <p className='text-medium-normal  black'>Mit diesen einfachen Schritten können Sie Ihr Zuhause makellos sauber und ordentlich halten. Organisation, die richtige Verwendung von Reinigungsmitteln und regelmäßige Wartung sind der Schlüssel zum Erfolg. Vergessen Sie nicht, natürliche Reinigungsmittel zu verwenden, die umweltfreundlich und gesundheitsverträglich sind.</p>
                        <p className='text-medium-normal  black'>Für weitere Tipps und Tricks zur Hausreinigung folgen Sie unserem Blog!

                        </p>


                    </div>

                </div>
            </div>
        </div>
    )
}


export default Nasveti
