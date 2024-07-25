import React from 'react';
import './Footer.css';
import { IconArrowUpRight, IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src="/assets/success-pack-gray.svg" alt="Logo" className='footer-logo' />
        </div>
        <div className="footer-links">
            <a href="/about-us">
              <IconArrowUpRight size={16} /> About Us
            </a>
            <a href="/gallery">
              <IconArrowUpRight size={16} /> Gallery
            </a>
            <a href="/faqs">
              <IconArrowUpRight size={16} /> FAQs
            </a>
          </div>
        <div className="footer-contact">
          <p>
            <IconMapPin size={16} /> Gaviota #1358 GUADALAJARA , JALISCO , COL MORELOS
          </p>
          <p>
            <IconPhone size={16} /> +52-XX-XXXX-XXXX
          </p>
          <p>
            <IconMail size={16} /> xxxxx@xxxx.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>Copyright © Success Pack Dynamics 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
