import styles from './Hero.module.css';

export default function Hero() {
  const airbnbLink = "https://www.airbnb.co.uk/rooms/1227380167320183530?source_impression_id=p3_1779713646_P376pV-YoktkRIsI";
  const bookingLink = "https://www.booking.com/hotel/ph/dalakit-house-villa-two.en-gb.html?aid=318615&label=New_English_EN_PL_26767307665-54Rox84zAqy3A%2A6faWk%2A6QS640874805580%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-64415224945%3Alp1011301%3Ali%3Adec%3Adm%3Aag26767307665%3Acmp394949905&sid=a427cfe12292d98b14b7d55a452b4983&dest_id=-2453627&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1779713674&srpvid=11865abaac0e024e&type=total&ucfs=1&";

  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Villa Two, Siquijor</h1>
        <p className="serif">Your private oasis in the heart of the Philippine jungle</p>
        
        <div className={styles.actions}>
          <a href={airbnbLink} className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">Book on Airbnb</a>
          <a href={bookingLink} className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">Book on Booking.com</a>
        </div>
      </div>
    </header>
  );
}
