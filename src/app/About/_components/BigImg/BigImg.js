'use client'

import React, { useRef, useEffect, useState } from 'react';

import './BigImg.css'
import '../../../globals.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const BigImg = () => {
    const aboutImgRef = useRef(null); // Reference for the section1 header
    const aboutImgRef2 = useRef(null); // Reference for the section1 header

    useGSAP(() => {
        const container = document.querySelector('.container');

        // Ensure the element exists and is rendered before attaching ScrollTrigger
        if (aboutImgRef.current) {
            gsap.fromTo(aboutImgRef.current, {
                y: '50%', // Start with translateY(50%) to match your initial CSS
                width: '50%' // Start width to match your initial CSS
            }, {
                scrollTrigger: {
                    trigger: ".one-second-wor",
                    start: "top bottom", // Start when "#section4" enters the bottom of the viewport
                    end: "center top", // End when "#section4" exits the top of the viewport
                    scrub: true, // Smooth transition with scroll movement
                    markers: false, // Shows visual markers for debugging
                    once: true
                },
                y: '0%', // Final position at the top of its container
                width: '100%', // Increase width to 100%
                ease: 'none', // Use a linear ease for the animation to sync with scroll

            });
        }
    }, []);

    useGSAP(() => {

        // Ensure the element exists and is rendered before attaching ScrollTrigger
        if (aboutImgRef2.current) {
            gsap.fromTo(aboutImgRef2.current, {
                y: '50%', // Start with translateY(50%) to match your initial CSS
                width: '50%' // Start width to match your initial CSS
            }, {
                scrollTrigger: {
                    trigger: ".one-second-wor",
                    start: "top bottom", // Start when "#section4" enters the bottom of the viewport
                    end: "center top", // End when "#section4" exits the top of the viewport
                    scrub: true, // Smooth transition with scroll movement
                    markers: false, // Shows visual markers for debugging
                    once: true
                },
                y: '0%', // Final position at the top of its container
                width: '100%', // Increase width to 100%
                ease: 'none', // Use a linear ease for the animation to sync with scroll

            });
        }
    }, []);
    return (
        <section>
            <div className='big-img-main'>
                <div className='big-img-wrapper'>
                    <div className='kdosmomiu'>
                        <h3 className='hero-main-header'>Lassen Sie uns Ihr Zuhause verschönern!</h3>

                    </div>

                    <div className='one-second-wor'>
                        <img alt='about-1' className='about-img desktop' src='/images/h1.webp' ref={aboutImgRef} />
                        <img alt='about-1' className='about-img mobile' src='/images/h2.webp' ref={aboutImgRef2} />
                    </div>
                </div>

                <div className='iso-wrapper'>
                    <div className='iso-left'>
                        <div className='headers-wrapper'>

                            <div className='header-wrapped st-et nomr'>
                                <p className='text-regular-semibold   nomr'>Standards</p>
                            </div>
                            <h1 className='hero-main-header margintop '>
                            Unser Unternehmen folgt strengen Standards für die besten Reinigungsergebnisse!            </h1>
                            <p className='text-medium-normal margintop boldovan'>
                            Wir sind verpflichtet, die höchste Qualität der Dienstleistungen sicherzustellen.

                            </p>



                        </div>
                    </div>

                    <div className='iso-right'>
                        <div className='iso-cell'>
                            <img src="/images/user-plus.svg" className='relume-icon' alt='heros' />
                            <h6 className='heading-desktop-h6 highlighted-header'>ISO 9001: Qualitätsmanagementsystem</h6>
                            <p className='text-regular-normal'>Unsere Dienstleistungen erfüllen konsequent die Anforderungen der Kunden und die gesetzlichen Vorgaben.</p>
                        </div>
                        <div className='iso-cell'>
                            <img src="/images/health.svg" className='relume-icon' alt='heros' />
                            <h6 className='heading-desktop-h6 highlighted-header'>ISO 45001: Managementsystem für Sicherheit und Gesundheit am Arbeitsplatz</h6>
                            <p className='text-regular-normal'>Wir legen großen Wert auf die Gesundheit und Sicherheit unserer Mitarbeiter und Kunden.</p>
                        </div>
                        <div className='iso-cell'>
                            <img src="/images/happy-heart-eyes.svg" className='relume-icon' alt='heros' />
                            <h6 className='heading-desktop-h6 highlighted-header'>EN 13549: Qualitätsstandards für Reinigungsdienste</h6>
                            <p className='text-regular-normal'>Wir halten uns an die europäischen Standards zur Sicherstellung der Qualität von Reinigungsdiensten.</p>
                        </div>
                        <div className='iso-cell'>
                            <img src="/images/leaf.svg" className='relumen-icon' alt='heros' />
                            <h6 className='heading-desktop-h6 highlighted-header'>Ecolabel</h6>
                            <p className='text-regular-normal'>
                            Wir erfüllen hohe Umweltstandards.</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default BigImg
