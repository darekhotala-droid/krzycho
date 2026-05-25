"use client";

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Dalakit House</div>
      <div className={`${styles.hamburger} ${menuActive ? styles.hamburgerActive : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.navLinks} ${menuActive ? styles.navLinksActive : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#amenities" onClick={closeMenu}>Amenities</a>
        <a href="#booking" className={styles.btnBookNav} onClick={closeMenu}>Book Now</a>
      </div>
    </nav>
  );
}
