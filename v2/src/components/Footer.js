import styles from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa';
import { SiAirbnb } from 'react-icons/si';
import { TbBrandBooking } from 'react-icons/tb';

export default function Footer() {
  const igLink = "https://www.instagram.com/explore/locations/437100646151487/the-dalakit-house-villa-two/";
  const airbnbLink = "https://www.airbnb.co.uk/rooms/1227380167320183530?source_impression_id=p3_1779713646_P376pV-YoktkRIsI";
  const bookingLink = "https://www.booking.com/hotel/ph/dalakit-house-villa-two.en-gb.html?aid=318615&label=New_English_EN_PL_26767307665-54Rox84zAqy3A%2A6faWk%2A6QS640874805580%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-64415224945%3Alp1011301%3Ali%3Adec%3Adm%3Aag26767307665%3Acmp394949905&sid=a427cfe12292d98b14b7d55a452b4983&dest_id=-2453627&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1779713674&srpvid=11865abaac0e024e&type=total&ucfs=1&";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <h3 className="serif">Dalakit House</h3>
          <p className={styles.subBrand}>Villa Two</p>
        </div>
        
        <div className={styles.info}>
          <p>Lambojon, Siquijor</p>
          <p>Philippines</p>
        </div>

        <div className={styles.social}>
          <a href={igLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={24} /></a>
          <a href={airbnbLink} target="_blank" rel="noopener noreferrer" aria-label="Airbnb"><SiAirbnb size={24} /></a>
          <a href={bookingLink} target="_blank" rel="noopener noreferrer" aria-label="Booking"><TbBrandBooking size={26} /></a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Dalakit House Villa Two. All rights reserved.</p>
      </div>
    </footer>
  );
}
