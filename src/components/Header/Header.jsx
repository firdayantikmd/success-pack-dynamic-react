import React from 'react';
import './Header.css';
import { IconArrowUpRight } from '@tabler/icons-react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src='/assets/success-pack.svg' alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/about-us">
              <IconArrowUpRight size={16} /> About Us
            </a>
          </li>
          <li>
            <a href="/gallery">
              <IconArrowUpRight size={16} /> Gallery
            </a>
          </li>
          <li>
            <a href="/faqs">
              <IconArrowUpRight size={16} /> FAQs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
