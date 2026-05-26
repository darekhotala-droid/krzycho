import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { SiAirbnb } from 'react-icons/si';
import { TbBrandBooking } from 'react-icons/tb';
import styles from './Contact.module.css';

export default function ContactPage() {
  const igLink = "https://www.instagram.com/explore/locations/437100646151487/the-dalakit-house-villa-two/";
  const airbnbLink = "https://www.airbnb.co.uk/rooms/1227380167320183530";
  const bookingLink = "https://www.booking.com/hotel/ph/dalakit-house-villa-two.en-gb.html";

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.header}>
          <img src="/images/logo.png" alt="Dalakit House Logo" className={styles.logo} />
          <h1>Contact Us</h1>
          <p className="serif" style={{color: '#666', fontSize: '1.2rem', marginTop: '0.5rem'}}>We'd love to hear from you</p>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.card}>
            <h3>Get in Touch</h3>
            <div className={styles.contactItem}>
              <span className={styles.icon}><FaEnvelope size={20} /></span>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:dalakitvillatwo@gmail.com">dalakitvillatwo@gmail.com</a></p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.icon}><FaPhoneAlt size={20} /></span>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:+639953500379">+63 995 350 0379</a></p>
                <p style={{fontSize: '0.9rem', color: '#888'}}>Chris</p>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <a href={igLink} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <FaInstagram size={24} />
              </a>
              <a href={airbnbLink} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <SiAirbnb size={24} />
              </a>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <TbBrandBooking size={26} />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
