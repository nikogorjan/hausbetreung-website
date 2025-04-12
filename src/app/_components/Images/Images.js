'use client'

import React, { useRef, useEffect, useState } from 'react';
import './Images.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);

const Images = () => {
    const headerRef1 = useRef(null); // Reference for the section1 header
    const textRef1 = useRef(null); // Reference for the section1 header
    const rowRef1 = useRef(null);
    const rowReff1 = useRef(null);
    const aboutImgRef = useRef(null); // Reference for the section1 header
    const aboutImgRef2 = useRef(null);
    const tmpRef1 = useRef(null);
    const swiperRef = useRef(null);

    const goPrev = () => {
        console.log("click next")

        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
            console.log("click next")
        }
    };

    // Function to go to the previous slide
    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: tmpRef1.current,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: false,
                markers: false,
            }
        });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: tmpRef1.current,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: false,
                markers: false,
            }
        });

        tl2.to('.line11', { scaleX: 1, opacity: 1, duration: 0.5 })
            .to('.circle11', { opacity: 1, duration: 0.5 })
            .fromTo('.circle-text1:nth-of-type(1)', { display: 'none' }, { display: 'block', duration: 0.1 })
            .to('.line21', { scaleX: 1, opacity: 1, duration: 0.5 })
            .to('.circle21', { opacity: 1, duration: 0.5 })
            .fromTo('.circle-text1:nth-of-type(2)', { display: 'none' }, { display: 'block', duration: 0.1 })
            .to('.line31', { scaleX: 1, opacity: 1, duration: 0.5 })
            .to('.circle31', { opacity: 1, duration: 0.5 })
            .fromTo('.circle-text1:nth-of-type(3)', { display: 'none' }, { display: 'block', duration: 0.1 })
            .to('.line41', { scaleX: 1, opacity: 1, duration: 0.5 });

        tl.fromTo(headerRef1.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
            .fromTo(textRef1.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            )
            .fromTo(rowRef1.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
                "-=0.5"
            ).fromTo(rowReff1.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
                "-=0.5"
            );


    });

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
        const container = document.querySelector('.container');

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
        <>
            <div className='online-hook-main' ref={tmpRef1}>
                <div className='online-hook-wrapper'>
                    <div className='one-first-row'>
                        <div className='one-first-left'>
                            <div className='first-left-wrapper'>
                                <h3 className='heading-desktop-h3 black' ref={headerRef1}>Testen Sie unsere Fähigkeiten. Wir sind zuversichtlich, dass unsere Arbeit gründlich und termingerecht erledigt wird!</h3>
                            </div>


                        </div>
                        <div className='one-first-right'>
                            <div className='one-right-upper'>
                                <p className='text-medium-normal black' ref={textRef1}>Wir bieten ein breites Spektrum an Reinigungsleistungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind. Unser Team erfahrener Reinigungskräfte ist bestrebt, außergewöhnliche Ergebnisse zu erzielen, wobei umweltfreundliche Produkte und modernste Ausrüstung zum Einsatz kommen. Egal, ob Sie eine regelmäßige Hausreinigung, eine Tiefenreinigung oder spezialisierte Dienstleistungen wie Teppichreinigung oder Fensterreinigung benötigen, wir sind für Sie da. Vertrauen Sie uns, Ihr Zuhause sauber, frisch und gesund zu halten.</p>

                            </div>
                            <div className='one-right-lower'>
                                <div className='left-row'>
                                    <div className='left-row-cell'>
                                        <div className='left-row-cell-wrapper' ref={rowRef1}>
                                            <img src="/images/time.svg" className='relume-icon' alt='heros' />
                                            <h6 className='heading-desktop-h6 black'>Zuverlässige Reinigung</h6>
                                            <p className='text-regular-normal black'>Wenn Sie uns kontaktieren, setzen wir uns das Ziel, Ihre Arbeit so schnell wie möglich zu erledigen.</p>
                                        </div>
                                    </div>

                                    <div className='left-row-cell'>
                                        <div className='left-row-cell-wrapper' ref={rowReff1}>
                                            <img src="/images/calendar.svg" className='relume-icon' alt='heros' />
                                            <h6 className='heading-desktop-h6 black'>Flexibilität</h6>
                                            <p className='text-regular-normal black'>Ihren Termin können Sie ganz einfach über unsere Webseite reservieren.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='animated-line'>
                        <div className='linee line11'></div>
                        <div className='circlee circle11'><span className='circle-text1 black'>Termin auswählen</span></div>
                        <div className='linee line21'></div>
                        <div className='circlee circle21'><span className='circle-text1 black'>Anruf erhalten</span></div>
                        <div className='linee line31'></div>
                        <div className='circlee circle31'><span className='circle-text1 black'>
                        Auf uns warten</span></div>
                        <div className='linee line41'></div>
                    </div>





                </div>


                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={40}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: -20,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    className="mySwiper"
                    ref={swiperRef}

                >
                    <SwiperSlide>
                        <img src="/images/i1.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/i2.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/i3.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/i4.webp" />
                    </SwiperSlide>
                </Swiper>

                <div className='arrows'>
                    <div className='button-next' onClick={goNext}><span className='arrow'></span></div>
                    <div className='button-prev' onClick={goPrev}><span className='arrow'></span></div>
                </div>



                
            
            
            
            </div>


            <div className='zivali-main'>
                <div className='zivali-wrapper'>
                    <div className='zivali-first-row'>
                        <div className='zivali-left'>
                            <h3 className='heading-desktop-h3 black' >Wir kümmern uns auch um Ihre Tiere und Pflanzen, wenn Sie im Urlaub sind!</h3>

                        </div>
                        <div className='zivali-right'>
                            <p className='text-medium-normal black ' >Die Pflege Ihrer Tiere und Pflanzen, während Sie im Urlaub sind, ist entscheidend für deren Gesundheit und Glück in Ihrer Abwesenheit. Wir bieten umfassende Betreuungsdienste für Ihre Haustiere und Pflanzen an, die auf die spezifischen Bedürfnisse Ihrer wertvollen Freunde und Ihres Grüns abgestimmt sind. Für Ihre Haustiere bieten wir tägliche Fütterung, Spaziergänge, Spiel und Gesellschaft an, damit sie die gleiche Liebe und Aufmerksamkeit erhalten wie zu Hause. Unsere Dienstleistungen für die Pflanzenpflege umfassen regelmäßiges Gießen, Beschneiden und die Überwachung ihres Gesundheitszustands, was sicherstellt, dass sie weiterhin gedeihen und Ihren Raum verschönern.</p>

                        </div>
                    </div>  

                    <div className='zivali-second-row'>
                        <div className='second-img1-wrapper'>
                            <img src="/images/plant2.webp" className='plant-img' alt='heros' />

                        </div>
                        <div className='second-img2-wrapper'>
                            <img src="/images/plant4.webp" className='plant-img' alt='heros' />

                        </div>
                        <div className='second-img3-wrapper'>
                            <img src="/images/plant1.webp" className='plant-img' alt='heros' />

                        </div>

                    </div>       
                </div>
            </div>


        </>
    )

}

export default Images
