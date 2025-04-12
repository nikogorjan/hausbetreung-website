'use client'

import React, { useState, useRef } from 'react';
import './Testimonials.css'

const testimonials = [
    {
        image: "/images/ppl5.webp", // Replace with actual image path
        name: "Johannes Bauer",
        testimonial: "Die Nutzung ihrer Dienstleistungen war eine der besten Entscheidungen, die ich je getroffen habe. Mein Zuhause ist jetzt immer sauber und frisch, was es mir ermöglicht, mich nach einem langen Tag zu entspannen."
    },
    {
        image: "/images/ppl1.webp", // Replace with actual image path
        name: "Klara Schulz",
        testimonial: "Der persönliche Ansatz und die ständige Unterstützung waren unglaublich. Das Team ist genau und aufmerksam auf Details, was mein Zuhause makellos macht."
    },
    {
        image: "/images/ppl3.webp", // Replace with actual image path
        name: "Felix Wagner",
        testimonial: "Der Reinigungsservice ist gründlich und effizient. Ihre Tipps zur Aufrechterhaltung der Sauberkeit haben mir sehr geholfen. Sehr empfehlenswert!"
    },
    {
        image: "/images/ppl2.webp", // Replace with actual image path
        name: "Laura Mayer",
        testimonial: "Dieser Reinigungsservice hat mir nicht nur geholfen, mein Zuhause sauber zu halten, sondern auch meine Lebensqualität zu verbessern. Das Team ist professionell und kümmert sich wirklich um die Zufriedenheit der Kunden."
    },
    {
        image: "/images/ppl6.webp", // Replace with actual image path
        name: "Lukas Hoffmann",
        testimonial: "Anfangs war ich skeptisch, aber die Ergebnisse sprechen für sich. Mein Zuhause war noch nie so sauber und organisiert. Das ist nicht nur ein Reinigungsservice; es ist eine Investition in Ihr Zuhause."
    }
];



const Testimonials = () => {
    // State to keep track of the active testimonial index
    const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
    const testimonialParagraphRef = useRef(null); // Reference to the testimonial paragraph
    const lineRef = useRef(null); // Reference to the testimonial paragraph
    const imageRef = useRef(null); // Reference to the testimonial paragraph
    const nameRef = useRef(null); // Reference to the testimonial paragraph

    // Handler for next testimonial
    const handleNext = () => {
        // Add the class "translateandchange" to the testimonial paragraph
        if (testimonialParagraphRef.current) {
            testimonialParagraphRef.current.classList.add("translateandchange");
            lineRef.current.classList.add("changesize");
            imageRef.current.classList.add("fadeaway");
            nameRef.current.classList.add("fadeaway");

            // Remove the class after 1 second
            setTimeout(() => {
                if (testimonialParagraphRef.current) {
                    testimonialParagraphRef.current.classList.remove("translateandchange");
                    lineRef.current.classList.remove("changesize");
                    imageRef.current.classList.remove("fadeaway");
                    nameRef.current.classList.remove("fadeaway");


                }

                // Update the index after the class is removed to ensure smooth transition
                setActiveTestimonialIndex((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
            }, 600);
        } else {
            // Directly update the index if the ref is not attached for some reason
            setActiveTestimonialIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const handlePrev = () => {
        if (testimonialParagraphRef.current) {
            testimonialParagraphRef.current.classList.add("translateandchange");
            lineRef.current.classList.add("changesize");
            imageRef.current.classList.add("fadeaway");
            nameRef.current.classList.add("fadeaway");

            // Remove the class after 1 second
            setTimeout(() => {
                if (testimonialParagraphRef.current) {
                    testimonialParagraphRef.current.classList.remove("translateandchange");
                    lineRef.current.classList.remove("changesize");
                    imageRef.current.classList.remove("fadeaway");
                    nameRef.current.classList.remove("fadeaway");


                }

                // Update the index after the class is removed to ensure smooth transition
                setActiveTestimonialIndex((prevIndex) =>
                    prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
                );
            }, 600);
        } else {
            // Directly update the index if the ref is not attached for some reason
            setActiveTestimonialIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            );
        }
    };

    const handleBulletClick = (index) => {
        if (testimonialParagraphRef.current) {
            testimonialParagraphRef.current.classList.add("translateandchange");
            lineRef.current.classList.add("changesize");
            imageRef.current.classList.add("fadeaway");
            nameRef.current.classList.add("fadeaway");

            // Remove the class after 1 second
            setTimeout(() => {
                if (testimonialParagraphRef.current) {
                    testimonialParagraphRef.current.classList.remove("translateandchange");
                    lineRef.current.classList.remove("changesize");
                    imageRef.current.classList.remove("fadeaway");
                    nameRef.current.classList.remove("fadeaway");


                }

                // Update the index after the class is removed to ensure smooth transition
                setActiveTestimonialIndex(index);
            }, 600);
        } else {
            // Directly update the index if the ref is not attached for some reason
            setActiveTestimonialIndex(index);
        }
    };


    // Handler for clicking on a bullet point
    /*const handleBulletClick = (index) => {
        setActiveTestimonialIndex(index);
    };*/

    return (
        <div className='testimonials-main'>
            <div className='testimonials-wrapper'>
                <div className='tete'>
                <div className='header-wrapped st-et '>
                    <p className='text-regular-semibold  black nomr brbr'>Bewertungen</p>
                </div>
                </div>
                <div className='header-wrapper'>
                    <h3 className='heading-desktop-h3 black' >Kundenbewertungen zeugen von unserem Engagement!</h3>
                </div>

                <div className='header-wrapper'>
                    <h3 className='text-medium-normal black' >Überzeugen Sie sich selbst.</h3>
                </div>
                <div className='testimonials-holder'>

                    <div className='testimonials-holder-row'>
                        <div className='slika-holder' ref={imageRef} ><img src={testimonials[activeTestimonialIndex].image} alt={testimonials[activeTestimonialIndex].name} className='selected-img' /></div>
                        <div className='narekovaj-holder'>
                            <img src="/images/narekovaj.webp" className='narekovaj-img' alt='heros' />

                        </div>
                    </div>

                    <p ref={testimonialParagraphRef} className='testimonial-paragraph'>{testimonials[activeTestimonialIndex].testimonial}</p>

                    <div className='nameandline-rov'>
                        <div ref={lineRef} className='testimonial-line'></div>
                        <h3 ref={nameRef} className='testimonial-name'>{testimonials[activeTestimonialIndex].name}</h3>
                    </div>


                </div>
                <div className='navigations-row'>
                    <div className='bullets'>
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`testimonial-bullet ${index === activeTestimonialIndex ? 'bullet-active' : ''}`}
                                onClick={() => handleBulletClick(index)}
                            >
                                {/* Render bullet point */}
                            </div>
                        ))}
                    </div>
                    <div className='arrows'>
                        <div className='button-next' onClick={handlePrev}><span className='arrow'></span></div>
                        <div className='button-prev' onClick={handleNext}><span className='arrow'></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
