"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { SiAirbnb } from 'react-icons/si';
import { TbBrandBooking } from 'react-icons/tb';
import { FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  const isSolid = !isHomePage || scrolled;

  const airbnbLink = "https://www.airbnb.co.uk/rooms/1227380167320183530?source_impression_id=p3_1779713646_P376pV-YoktkRIsI";
  const bookingLink = "https://www.booking.com/hotel/ph/dalakit-house-villa-two.en-gb.html?aid=318615&label=New_English_EN_PL_26767307665-54Rox84zAqy3A%2A6faWk%2A6QS640874805580%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-64415224945%3Alp1011301%3Ali%3Adec%3Adm%3Aag26767307665%3Acmp394949905&sid=a427cfe12292d98b14b7d55a452b4983&dest_id=-2453627&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1779713674&srpvid=11865abaac0e024e&type=total&ucfs=1&";
  const igLink = "https://www.instagram.com/explore/locations/437100646151487/the-dalakit-house-villa-two/";

  return (
    <nav className={`${styles.nav} ${isSolid ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logoContainer} style={{textDecoration: 'none'}}>
        <div className={styles.logo}>Dalakit House</div>
        <div className={styles.logoSub}>Villa Two</div>
      </Link>
      <div className={`${styles.hamburger} ${menuActive ? styles.hamburgerActive : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.navLinks} ${menuActive ? styles.navLinksActive : ''}`}>
        <a href="/#about" onClick={closeMenu}>About</a>
        <a href="/#amenities" onClick={closeMenu}>Amenities</a>
        <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <a href="/#calendar" onClick={closeMenu}>Availability</a>
        
        <div className={styles.iconLinks}>
          <div className={`${styles.iconGroup} ${styles.desktopHidden}`}>
            <a href="mailto:dalakitvillatwo@gmail.com" aria-label="Email" onClick={closeMenu}>
              <FaEnvelope size={24} />
            </a>
            <a href="tel:+639953500379" aria-label="Phone" onClick={closeMenu}>
              <FaPhoneAlt size={22} />
            </a>
          </div>
          
          <div className={styles.iconGroup}>
            <a href={igLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={closeMenu}>
              <FaInstagram size={24} />
            </a>
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.iconGroup}>
            <a href={airbnbLink} target="_blank" rel="noopener noreferrer" aria-label="Airbnb" onClick={closeMenu}>
              <SiAirbnb size={24} />
            </a>
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" aria-label="Booking.com" onClick={closeMenu}>
              <TbBrandBooking size={26} />
            </a>
          </div>
        </div>

        <div className={styles.mobileLogoContainer}>
          <img src="/images/logo.png" alt="Dalakit House Logo" className={styles.mobileLogo} />
        </div>
      </div>
    </nav>
  );
}
