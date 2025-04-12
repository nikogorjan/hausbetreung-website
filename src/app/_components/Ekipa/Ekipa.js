'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Ekipa.css'

const Ekipa = () => {

    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await axios.get('https://booking.hausbetreung.at/wp-json/wp/v2/ekipa');
                let members = response.data;

                // Sort members by acf.zaporedje
                members.sort((a, b) => a.acf.zaporedje - b.acf.zaporedje);

                // Fetch image URLs
                const fetchImageUrl = async (imageId) => {
                    const imageResponse = await axios.get(`https://booking.hausbetreung.at/wp-json/wp/v2/media/${imageId}`);
                    return imageResponse.data.source_url;
                };

                // Add slika_url to each member's acf
                const membersWithImages = await Promise.all(members.map(async (member) => {
                    if (member.acf.slika) {
                        console.log("fetch slika: " + member.acf.slika)
                        const slika_url = await fetchImageUrl(member.acf.slika);
                        return {
                            ...member,
                            acf: {
                                ...member.acf,
                                slika_url,
                            }
                        };
                    }
                    return member;
                }));

                setTeamMembers(membersWithImages);
            } catch (error) {
                console.error('Error fetching team members:', error);
            }
        };

        fetchTeamMembers();
    }, []);


    useEffect(() => {
        console.log(teamMembers)
    }, [teamMembers]);



    const handleCallClick = (phoneNumber) => {
        window.open(`tel:${phoneNumber}`, '_self');
    };

    const handleMailClick = (email) => {
        window.open(`mailto:${email}`, '_self');
    };



    return (
        <div className='ekipa-main'>
            <div className='ekipa-wrapper'>

                <div className='ekipa-left'>
                    <div className='left-content'>
                        <div className='header-wrapped st-et nomr'>
                            <p className='text-regular-semibold   nomr'>Team</p>
                        </div>
                        <div className='header-wrapped'>
                            <h3 className='heading-desktop-h3 black margintop' >Lernen Sie uns kennen</h3>
                        </div>

                        <div className='header-wrapped'>
                            <h3 className='text-medium-normal black margintop' >Wir sind ein organisiertes Team, dessen gemeinsame Stärke rechtzeitige und qualitativ hochwertige Dienstleistungen ermöglicht.</h3>
                        </div>
                    </div>
                </div>

                <div className={`ekipa-right ${teamMembers.length < 3 ? 'less3' : ''}`}>
                {teamMembers.map(member => (
                        <div key={member.id} className='member-component'>
                            <img src={member.acf.slika_url} className='ekipa-member-img' alt={member.acf.ime} />

                            <div className='member-content'>
                                <p className='ekipa-name'>{member.acf.ime}</p>
                                <p className='ekipa-work'>{member.acf.polozaj}</p>
                                <div className='ekipa-contact'>
                                    <img
                                        src="/images/phone.svg"
                                        className='ekipa-member-icon'
                                        alt="phone icon"
                                        onClick={() => handleCallClick(member.acf.telefon)}
                                    />
                                    <img
                                        src="/images/envelope.svg"
                                        className='ekipa-member-icon bigleft'
                                        alt="envelope icon"
                                        onClick={() => handleMailClick(member.acf.mail)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Ekipa
