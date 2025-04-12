'use client'

import React, { useEffect, useRef } from 'react';
import '../../../globals.css';

const Plugin = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleScrollToTop = (event) => {
      console.log('Message received from:', event.origin);
      console.log('Event data:', event.data);

      if (event.data && event.data.action === 'scrollToTop') {
        console.log('Scrolling to top');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('message', handleScrollToTop);

    return () => {
      window.removeEventListener('message', handleScrollToTop);
    };
  }, []);

  return (
    <div className='plugin-main'>
      <div className='plugin-wrapper'>
        <iframe
          ref={iframeRef}
          id='myFrame'
          src="https://booking.hausbetreung.at/"
          frameBorder="0"
          className='iframeplugin'
        ></iframe>
      </div>
    </div>
  );
};

export default Plugin;