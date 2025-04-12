'use client'


import React, { useRef, useEffect, useState } from 'react';
import './Question.css'; // Import the Sass module
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Question = () => {
    const tmpRef = useRef(null);
    const headerRef = useRef(null); // Reference for the section1 header
    const textRef = useRef(null); // Reference for the section1 header
    const rowRef = useRef(null); // Reference for the section1 header
    const rowReff = useRef(null); // Reference for the section1 header
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: tmpRef.current,
                start: 'top-=30% center',
                end: 'bottom center',
                scrub: false,
                markers: false,
            }
        });

        tl.fromTo(headerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
            .fromTo(textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            )
            .fromTo(rowRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
                "-=0.5"
            ).fromTo(rowReff.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
                "-=0.5"
            );
    });
  return (
    <div className='question-main'>
        <div className='question-wrapper'>
        <div className='tmpr' ref={tmpRef}>
                <div className='tmp-about-wrapper'>
                    <div className='tmp-about-left'>
                        <div className='left-wrapper'>
                            <div className='tmp-about-left-headers'>
                                <h3 className='heading-desktop-h3' ref={headerRef}>Warum uns wählen?</h3>
                                <p className='text-medium-normal' ref={textRef}>    Unser Team setzt sich dafür ein, hochwertige Reinigungsdienste zu bieten, die Ihre Erwartungen übertreffen. Wir verwenden die neuesten Technologien und umweltfreundlichen Produkte, um die besten Ergebnisse zu erzielen.
                                </p>
                            </div>

                            <div className='left-row'>
                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowRef}>
                                        <img src="/images/atom.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 highlighted-header'>Hohe Dienstleistungsqualität</h6>
                                        <p className='text-regular-normal'>Wir sind bestrebt, bei jeder Reinigung, die wir durchführen, Exzellenz zu erreichen.</p>
                                    </div>
                                </div>

                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowReff}>
                                        <img src="/images/leaf.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 highlighted-header'>Umweltfreundliche Produkte</h6>
                                        <p className='text-regular-normal'>Wir verwenden nur umweltfreundliche Produkte, die sicher für Ihr Zuhause und den Planeten sind. Unsere Reinigungsmethoden sind darauf ausgelegt, die Umweltbelastung zu minimieren.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tmp-about-right'>
                        <img src="/images/7z.svg" className='tmpp-img' alt='heros' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question
