'use client'

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

const imagesLeft = [
    'o1.webp', 'o2.webp', 'o3.webp', 'o4.webp'
];

const imagesRight = [
    'o5.webp', 'o6.webp', 'o7.webp', 'o8.webp'
];

gsap.registerPlugin(ScrollTrigger);


const AboutHeader2 = () => {
    const scrollRef = useRef(null); // Reference for the section1 header
    const section2Ref = useRef(null); // Reference for the target section

    const leftSliderRef = useRef(null);
    const rightSliderRef = useRef(null);

    const scrollToSection2 = () => {
        if (section2Ref.current) {
            section2Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useGSAP(() => {

        const images = document.querySelectorAll(".o-icon");
        const imageHeight = images[0].clientHeight;
        const totalHeight = window.innerHeight - imageHeight; // 100vh in pixels

        gsap.set(images, {
            y: (i) => i * imageHeight 
        });

        gsap.to(images, {
            y: `-=${totalHeight}`,
            duration: 5,
            ease: "none",
            modifiers: {
                y: gsap.utils.unitize(gsap.utils.wrap(-(imageHeight)-1 , totalHeight))
            },
            repeat: -1
        });

        


    });



    return (
        <>
            <section>
                <div className='about-header-main'>
                    <div className='about-header-wrapper'>
                        <div className='about-left'>
                            <div className='headers-wrapper'>
                                <div className='hero-locations-row'>
                                    <img src="/images/map-pin.svg" className='location-icon' alt='location' />
                                    <p className='heros-location marginleft'>Sankt Kanzian, At</p>
                                </div>

                                <h1 className='hero-main-header margintop'>
                                    Profesionalne čistilne storitve za brezhiben dom
                                </h1>
                                <p className='hero-main-paragraph margintop'>
                                    Dobrodošli na naši spletni strani! Nudimo vrhunske čistilne storitve, da bo vaš dom vedno čist in svež.
                                </p>

                                <div className='hero-buttons-row margintop'>
                                    <button className='dark-button'>Rezervacija</button>
                                    <button className='dark-button marginleft'>Kontakt</button>
                                </div>

                                <div className='hero-stars-row margintop'>
                                    <p className='heros-location smol'>+750 končanih projektov</p>
                                    <div className='the-stars'>
                                        <img src="/images/star.svg" className='star-icon' alt='star' />
                                        <img src="/images/star.svg" className='star-icon' alt='star' />
                                        <img src="/images/star.svg" className='star-icon' alt='star' />
                                        <img src="/images/star.svg" className='star-icon' alt='star' />
                                        <img src="/images/star.svg" className='star-icon' alt='star' />
                                    </div>
                                </div>
                            </div>

                            <div className='pulsing-dowwn desktop' ref={scrollRef}>
                                <div id="mouse-scroll" onClick={scrollToSection2}>
                                    <div className="mouse">
                                        <div className="mouse-in"></div>
                                    </div>
                                    <div>
                                        <span className="down-arrow-1"></span>
                                        <span className="down-arrow-2"></span>
                                        <span className="down-arrow-3"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='about-right'>
                            <div className="scrolling-wrapper1">
                                <div className='boxes'>
                                    <img src="/images/o1.webp" className='o-icon' alt='star' />
                                    <img src="/images/o2.webp" className='o-icon' alt='star' />
                                    <img src="/images/o1.webp" className='o-icon' alt='star' />
                                    <img src="/images/o2.webp" className='o-icon' alt='star' />
                                    <img src="/images/o1.webp" className='o-icon' alt='star' />

                                </div>


                            </div>

                            <div className="scrolling-wrapper">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div ref={section2Ref}>
                {/* Content of the section to scroll to */}
            </div>
        </>
    )
}

export default AboutHeader2
