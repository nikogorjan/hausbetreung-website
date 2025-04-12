'use client'

import React, { useRef, useEffect, useState } from 'react';
import '../../../globals.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
    const wrapperRef = useRef(null); // Reference for the section1 header
    const stat1Ref = useRef(null); // Reference for the section1 header
    const stat2Ref = useRef(null); // Reference for the section1 header
    const stat3Ref = useRef(null); // Reference for the section1 header

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top bottom", // Adjust as needed
                end: "bottom bottom", // Adjust as needed
                scrub: false,
                markers: false, // Remove or set to false in production
            }
        });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top bottom", // Adjust as needed
                end: "bottom bottom", // Adjust as needed
                scrub: false,
                markers: false, // Remove or set to false in production
            }
        });

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top bottom", // Adjust as needed
                end: "bottom bottom", // Adjust as needed
                scrub: false,
                markers: false, // Remove or set to false in production
            }
        });

        tl2.fromTo(stat1Ref.current, 
            { innerText: 0 }, 
            {
                innerText: 20,
                duration: 3,
                snap: { innerText: 1 },
                ease: "power1.inOut",
                onUpdate: function () {
                    stat1Ref.current.innerText = Math.floor(stat1Ref.current.innerText);
                }
            }
        );

        tl.fromTo(stat2Ref.current, 
            { innerText: 0 }, 
            {
                innerText: 1000,
                duration: 3,
                snap: { innerText: 1 },
                ease: "power1.inOut",
                onUpdate: function () {
                    stat1Ref.current.innerText = Math.floor(stat1Ref.current.innerText);
                }
            }
        );

        tl3.fromTo(stat3Ref.current, 
            { innerText: 0 }, 
            {
                innerText: 100,
                duration: 3,
                snap: { innerText: 1 },
                ease: "power1.inOut",
                onUpdate: function () {
                    stat1Ref.current.innerText = Math.floor(stat1Ref.current.innerText);
                }
            }
        );
    }, []);

    return (
        <div className='stats-main'>
            <div className='stats-wrapper'>
                <div className='stats-header-wrapper'>

                    <div className='stat-header-left'>
                        <div className='header-wrapped st-et'>
                            <p className='text-regular-semibold   nomr'>Statistik</p>
                        </div>
                        <h3 className='heading-desktop-h3 black' >Unsere Statistik: Erfahrungen, Erfolge und abgeschlossene Projekte</h3>

                    </div>

                    <div className='stat-header-right'>
                        <p className='text-medium-normal black' >Seit über einem Jahrzehnt bieten wir hochwertige Reinigungsdienste an und haben erfolgreich über 1000 Projekte abgeschlossen. Unser Team von Fachleuten strebt nach Exzellenz und Kundenzufriedenheit, was sich in unseren Erfolgen und der Vielzahl zufriedener Kunden widerspiegelt.</p>

                    </div>
                </div>



                <div className='stats-numbers-wrapper' ref={wrapperRef}>
                    

                    <div className='stats-row'>
                        <div className='statcol2'>
                            <img src='/images/11zz.svg' alt='cleaning icon' className='svg-img2' />
                        </div>
                        <div className='statcol22'>
                            <div className='stat-cell3'>
                                <div className='cell-top'>
                                    <h3 className='cell-header'>Jahre an Erfahrung</h3>
                                </div>
                                <div className='cell-mid'>
                                    <div className='stat'>
                                        <p className='years-p' >
                                        <span ref={stat1Ref}>0</span><span className='hreee'>+</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='stat-cell3'>
                                <div className='cell-top'>
                                    <h3 className='cell-header'>Erbrachte Dienstleistungen</h3>
                                </div>
                                <div className='cell-mid'>
                                    <div className='stat'>
                                        <p className='years-p'>
                                        <span ref={stat2Ref}>0</span><span className='hreee'>+</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='stat-cell3'>
                                <div className='cell-top'>
                                    <h3 className='cell-header'>Umfassende Dienstleistungen</h3>
                                </div>
                                <div className='cell-mid'>
                                    <div className='stat'>
                                        <p className='years-p'>
                                        <span ref={stat3Ref}>0</span><span className='hreee'>%</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Stats
