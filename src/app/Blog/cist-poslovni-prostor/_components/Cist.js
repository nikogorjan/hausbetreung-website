'use client'


import React from 'react'
import '../../blogcss.css'
import { Table } from 'antd';


const columns = [
    {
        title: 'Ökologische Hilfsmittel',
        dataIndex: 'prip',
        key: 'prip',
        width: 150,
    },
    {
        title: 'Verwendung',
        dataIndex: 'nam',
        key: 'nam',
        width: 400,
    },
];

const data = [
    { key: 1, prip: 'Natürliche Reinigungsmittel', nam: 'Verwendung von natürlichen Reinigungsmitteln anstelle von Chemikalien' },
    { key: 2, prip: 'Mikrofasertücher', nam: 'Mehrfache Nutzung, weniger Abfall' },
    { key: 3, prip: 'Recycling', nam: 'Richtige Mülltrennung' },
    { key: 4, prip: 'Wassereinsparung', nam: 'Verwendung einer minimalen Menge Wasser für die Reinigung' },

];


const Cist = () => {

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
        <div>
            <div className='blog-post-main'>
                <div className='blog-post-wrapper'>
                    <div className='blog-img-wrapper'>
                        <img src="/images/b2.webp" className='blogp-img' alt='beginner' />

                    </div>

                    <div className='blogp-content-wrapper'>

                    <div className='blog-header-wrapper'>
                        <h3 className='heading-desktop-h3 black ' >Wie Sie Ihren Geschäftsraum sauber halten</h3>
                    </div>

                    <h3 className='text-medium-normal  black'>Ein sauberer Geschäftsraum ist entscheidend für die Schaffung einer produktiven und professionellen Arbeitsumgebung. In diesem Beitrag werden wir untersuchen, wie Sie durch einige einfache Schritte und regelmäßige Wartung sicherstellen können, dass Ihr Arbeitsplatz immer makellos ist.
                    </h3>

                    <h3 className='text-medium-normal  black'>Die Aufrechterhaltung der Sauberkeit in einem Geschäftsraum ist nicht nur für den ästhetischen Eindruck wichtig, sondern auch für die Gesundheit und das Wohlbefinden der Mitarbeiter. Ein ordentlicher und sauberer Raum fördert eine bessere Organisation, reduziert Stress und steigert die Produktivität. Hier sind einige wichtige Schritte, um die Sauberkeit in Ihrem Geschäftsraum zu gewährleisten.
                    </h3>


                    <div className='blog-post-urnik'>
                        <div className='blog-link-wrapper' onClick={() => handleClick('section1')}>
                            <p href="#section1" className='smooth-scroll'  > Regelmäßige Sauberkeitspflege</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section2')}>
                            <p href="#section2" className='smooth-scroll'>Einsatz von professionellen Reinigungsdiensten</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section3')}>
                            <p href="#section3" className='smooth-scroll'>Organisation des Arbeitsplatzes</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section4')}>
                            <p href="#section4" className='smooth-scroll'>Ökologische Ausrichtung</p>

                        </div>


                        <div className='blog-link-wrapper' onClick={() => handleClick('section5')}>
                            <p href="#section5" className='smooth-scroll'>Gesundheit und Sicherheit</p>

                        </div>

                        <div className='blog-link-wrapper' onClick={() => handleClick('section6')}>
                            <p href="#section5" className='smooth-scroll'>Abschluss</p>

                        </div>
                    </div>


                    <div id="section1" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '> Regelmäßige Sauberkeitspflege</h2>
                        <p className='text-medium-normal  black'>Regelmäßige Sauberkeitspflege ist die Grundlage für langfristige Ordnung und Hygiene. Hier sind einige Tipps für die tägliche und wöchentliche Pflege:</p>




                        <div className='bullet-points-wrapper'>
                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Tägliche Aufgaben:</span> Abwischen der Arbeitsflächen, Entsorgung des Mülls, Staubsaugen oder Fegen der Böden.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'><span className='boldovano'>Wöchentliche Aufgaben: </span>Gründliche Reinigung der Sanitäreinrichtungen, Fensterreinigung, Desinfektion häufig berührter Oberflächen (Türklinken, Lichtschalter).</p>

                            </div>

                           


                        </div>
                    </div>

                    <div id="section2" className='transformed-for-link'></div>
                    <div className='target-section'>
                        
                        <div className='target-divider'>
                            <div className='target-left'>
                            <h2 className='heading-desktop-h6 black '>Einsatz von professionellen Reinigungsdiensten</h2>

                                <p className='text-medium-normal  black'>Professionelle Reinigungsdienste können erheblich dazu beitragen, hohe Standards der Sauberkeit in Ihrem Geschäftsraum aufrechtzuerhalten. Der Einsatz von fachkundig geschulten Reinigungskräften bietet zahlreiche Vorteile, wie hohe Reinigungsqualität, Zeitersparnis und Anpassungsfähigkeit der Dienstleistungen an Ihre spezifischen Bedürfnisse.</p>

                            </div>

                            <div className='target-right'>
                                <img src="/images/bl2.webp" className='blogger-img' alt='beginner' />

                            </div>
                        </div>

                    </div>


                    <div id="section3" className='transformed-for-link'></div>
                    <div className='target-section'>
                        
                        <div className='target-divider'>
                            <div className='target-left'>
                                <img src="/images/bl3.webp" className='blogger-img' alt='beginner' />

                            </div>

                            <div className='target-right'>
                            <h2 className='heading-desktop-h6 black '>Organisation des Arbeitsplatzes</h2>

                                <p className='text-medium-normal  black'>Ein ordentlicher Arbeitsplatz trägt zur leichteren Aufrechterhaltung der Sauberkeit bei. Ermutigen Sie die Mitarbeiter, ihre Arbeitsflächen organisiert und aufgeräumt zu halten. Nutzen Sie Schränke und Schubladen zur Aufbewahrung von Dokumenten und Materialien, damit diese nicht im Büro verstreut sind. Regelmäßige Überprüfung und Aktualisierung des Inventars sowie das Entfernen von unnötigen Gegenständen helfen, die Ordnung zu bewahren.</p>


                            </div>
                        </div>

                    </div>


                    <div id="section4" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Ökologische Ausrichtung</h2>
                        <p className='text-medium-normal  black'>Die Integration umweltfreundlicher Praktiken in die Reinigung von Geschäftsbereichen ist wichtig für eine nachhaltige Geschäftstätigkeit. Hier sind einige Tipps für umweltfreundliches Reinigen:</p>
                        <Table columns={columns} dataSource={data} pagination={false} className='bigtab' />

                    </div>

                    <div id="section5" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Gesundheit und Sicherheit</h2>
                        <p className='text-medium-normal  black'>Gesundheit und Sicherheit der Mitarbeiter stehen an erster Stelle. Die Gewährleistung einer sauberen und hygienischen Arbeitsumgebung hilft, die Verbreitung von Krankheiten zu verhindern und sorgt für eine sichere Arbeitsumgebung. Desinfizieren Sie regelmäßig Arbeitsflächen und Gemeinschaftsräume, sorgen Sie für regelmäßige Belüftung der Räume und verwenden Sie Schutzausrüstung wie Handschuhe und Masken, um die Sicherheit der Reinigungskräfte zu gewährleisten.</p>

                        


                    </div>

                    <div id="section6" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Abschluss</h2>
                        <p className='text-medium-normal  black'>Die Aufrechterhaltung der Sauberkeit im Geschäftsraum ist entscheidend für die Schaffung einer produktiven und angenehmen Arbeitsumgebung. Befolgen Sie unsere Tipps für regelmäßige Sauberkeitspflege, nutzen Sie professionelle Reinigungsdienste, organisieren Sie den Arbeitsplatz, integrieren Sie umweltfreundliche Praktiken und achten Sie auf die Gesundheit und Sicherheit der Mitarbeiter. Ein sauberer und ordentlicher Geschäftsraum ist nicht nur ästhetisch ansprechend, sondern fördert auch eine höhere Produktivität und das Wohlbefinden aller Mitarbeiter.</p>

                        


                    </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cist
