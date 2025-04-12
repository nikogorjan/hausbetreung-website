'use client'

import React, { useRef, useEffect } from 'react';
import './Story.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
    const storyRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: storyRef.current,
                start: 'top bottom',
                end: 'bottom center',
                scrub: false,
                markers: false,
            }
        });

        tl.to('.line1', { y: 0, duration: 1 })
            .to('.circle1', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text1', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line2', { y: -20, duration: 1 })
            .to('.content-holder1', { opacity: 1, y:0, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle2', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text2', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line3', { y: -20, duration: 1 })
            .to('.content-holder2', { opacity: 1, y:0, scale: 1, duration: 0.5 }, '-=0.5')

            .to('.circle3', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text3', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line4', { y: -20, duration: 1 })
            .to('.content-holder3', { opacity: 1, y:0, scale: 1, duration: 0.5 }, '-=0.5')

            .to('.circle4', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text4', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line5', { y: -20, duration: 1 })
            .to('.content-holder4', { opacity: 1, y:0, scale: 1, duration: 0.5 }, '-=0.5')



    }, []);

    return (
        <div className='story-main'>
            <div className='story-wrapper' ref={storyRef}>
                <div className='story-left'>
                    {/* Left side content */}
                </div>
                <div className='story-right'>
                    <div className='line-wrapper line-wrapper1'><div className='line line1'></div></div>

                    <div className='circle-wrapper'>
                        <div className='circle circle1'></div>
                        <div className='circle-text circle-text1'>2003</div>
                    </div>
                    <div className='line-wrapper'><div className='line-with-content'></div>
                        <div className='line line2'></div>
                        <div className='content-holder content-holder1'>
                            <p className='content-text black'>Unternehmensvision</p>
                            <img
                                src="/images/v1.webp"
                                alt="A couple"
                                className='story-img'
                            />
                        </div>
                    </div>
                    <div className='circle-wrapper'>
                        <div className='circle circle2'></div>
                        <div className='circle-text circle-text2'>2018</div>
                    </div>

                    <div className='line-wrapper'><div className='line-with-content'></div>
                        <div className='line line3'></div>
                        <div className='content-holder content-holder2'>
                            <p className='content-text black'>Umzug nach Österreich</p>
                            <img
                                src="/images/v5.webp"
                                alt="A couple"
                                className='story-img'
                            />
                        </div>
                    </div>
                    <div className='circle-wrapper'>
                        <div className='circle circle3'></div>
                        <div className='circle-text circle-text3'>2020</div>
                    </div>

                    <div className='line-wrapper'><div className='line-with-content'></div>
                        <div className='line line4'></div>
                        <div className='content-holder content-holder3'>
                            <p className='content-text black'>Verwaltung und Reinigung von Ferienunterkünften am Klopeiner See</p>
                            <img
                                src="/images/v7.webp"
                                alt="A couple"
                                className='story-img'
                            />
                        </div>
                    </div>
                    <div className='circle-wrapper'>
                        <div className='circle circle4'></div>
                        <div className='circle-text circle-text4'>2024</div>
                    </div>

                    <div className='line-wrapper'><div className='line-with-content'></div>
                        <div className='line line5'></div>
                        <div className='content-holder content-holder4'>
                            <p className='content-text black'>Gründung eines Unternehmens für Hausbetreuung/Reinigung</p>
                            <img
                                src="/images/v6.webp"
                                alt="A couple"
                                className='story-img'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Story;