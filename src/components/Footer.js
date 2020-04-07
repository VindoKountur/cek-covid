import React from 'react';
import LinkedInIcon from '../img/linkedin_icon.png';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='copyright-text'>
        <p>&copy; 2020, Vindo K </p>
      </div>
      <div className='provided'>
        Data by:{' '}
        <a
          href='https://kawalcorona.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Kawalcorona.com
        </a>
      </div>
      <div className='find-me' style={{ cursor: 'pointer' }}>
        <a
          href='https://linkedin.com/in/lifeindo-kountur'
          target='_blank'
          rel='noopener noreferrer'
          className='make-center'
        >
          <img src={LinkedInIcon} alt='My LinkedIn' title='Lifeindo Kountur' />
        </a>
      </div>
    </footer>
  );
};
