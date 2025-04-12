'use client'

import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import '../../../globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagesLeft = [
    'o1.webp', 'o2.webp', 'o3.webp', 'o4.webp'
];

const imagesRight = [
    'o5.webp', 'o6.webp', 'o7.webp', 'o8.webp'
];

const AboutHeader = () => {
    const scrollRef = useRef(null); // Reference for the section1 header
    const section2Ref = useRef(null); // Reference for the target section

    const leftSliderRef = useRef(null);
    const rightSliderRef = useRef(null);

    const scrollToSection2 = () => {
        if (section2Ref.current) {
            section2Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const settings = {
        infinite: true,
        speed: 20000,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 10,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false,
        swipeToSlide: false,
        draggable: false,
        touchMove: false,
    };

    useEffect(() => {
        const preventScroll = (e) => {
            e.preventDefault();
        };

        const leftSlider = leftSliderRef.current.innerSlider.list;
        const rightSlider = rightSliderRef.current.innerSlider.list;

        if (leftSlider) {
            leftSlider.addEventListener('touchmove', preventScroll);
        }
        if (rightSlider) {
            rightSlider.addEventListener('touchmove', preventScroll);
        }

        return () => {
            if (leftSlider) {
                leftSlider.removeEventListener('touchmove', preventScroll);
            }
            if (rightSlider) {
                rightSlider.removeEventListener('touchmove', preventScroll);
            }
        };
    }, []);




    const addAnimationClasses = () => {
        document.querySelectorAll('.dissapear_layer')[0].classList.add('first-diss');
        document.querySelectorAll('.dissapear_layer')[1].classList.add('second-diss');
        document.querySelectorAll('.dissapear_layer')[2].classList.add('third-diss');
      };

    const handleNavigation = (targetUrl) => {
        addAnimationClasses();

        setTimeout(() => {
            window.location.href = targetUrl;
          }, 500);
    };

    return (
        <>
            <section>
                <div className='about-header-main'>
                    <div className='about-header-wrapper'>
                        <div className='about-left'>
                            <div className='headers-wrapper'>
                                <div className='hero-locations-row st-et et-tu'>
                                    <img src="/images/world.svg" className='location-icon' alt='location' />
                                    <p className='heros-location marginleft'>Sankt Kanzian, At</p>
                                </div>

                                <h1 className='hero-main-header margintop'>
                                Professionelle Reinigungsdienste für ein makelloses Zuhause!
                                </h1>
                                <p className='hero-main-paragraph margintop'>
                                Willkommen auf unserer Webseite! Wir bieten erstklassige Reinigungsdienste an, damit Ihr Zuhause immer sauber und frisch bleibt.                                </p>

                                <div className='hero-buttons-row margintop'>
                                    <button className='dark-button blubr' onClick={() => handleNavigation('/Booking')}>Reservierung</button>
                                    <button className='dark-button marginleft' onClick={() => handleNavigation('/Contact')}>Kontakt</button>
                                </div>

                                <div className='hero-stars-row margintop'>
                                    <p className='heros-location smol'>+1000 abgeschlossene Projekte</p>
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
                        <div className='about-right desktop'>
                            <div className="scrolling-wrapper ">
                                {/* Left Column with images moving up */}
                                <Slider ref={leftSliderRef} {...settings}>
                                    {imagesLeft.map((image, index) => (
                                        <div className='image-wrapper' key={`left-${index}`}>
                                            <img src={`/images/${image}`} alt={`Image ${index + 1}`} className='slider-image' />
                                        </div>
                                    ))}
                                </Slider>

                                {/* Right Column with images moving down */}
                                <Slider ref={rightSliderRef} {...settings} rtl={true}>
                                    {imagesRight.map((image, index) => (
                                        <div className='image-wrapper' key={`right-${index}`}>
                                            <img src={`/images/${image}`} alt={`Image ${index + 1}`} className='slider-image' />
                                        </div>
                                    ))}
                                </Slider>
                            </div>


                        </div>

                        
                    </div>
                </div>

                <div className='about-right mobile'>
                            <div className='scrolling-wrapper2 '>

                                <div className='images-wrapper'>
                                    <img src="/images/o8.webp" className='o-i' alt='star' />
                                    <img src="/images/o2.webp" className='o-i' alt='star' />
                                    <img src="/images/o3.webp" className='o-i' alt='star' />
                                    <img src="/images/o4.webp" className='o-i' alt='star' />

                                </div>

                                <div className='images-wrapper'>
                                    <img src="/images/o5.webp" className='o-i' alt='star' />
                                    <img src="/images/o6.webp" className='o-i' alt='star' />
                                    <img src="/images/o1.webp" className='o-i' alt='star' />
                                    <img src="/images/o7.webp" className='o-i' alt='star' />
                                </div>

                            </div>
                        </div>
            </section>
            <div ref={section2Ref}>
                {/* Content of the section to scroll to */}
            </div>

            <div className='navigator-wrapper'>
                <div className='dissapear_layer blue'></div>
                <div className='dissapear_layer white'></div>
                <div className='dissapear_layer white'></div>

            </div>
        </>
    );
};

export default AboutHeader;