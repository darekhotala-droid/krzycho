import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Villa Two, Siquijor</h1>
        <p className="serif">Your private oasis in the heart of the Philippine jungle</p>
        
        <div className={styles.actions}>
          <a href="#" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">Book on Airbnb</a>
          <a href="#" className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">Book on Booking.com</a>
        </div>
      </div>
    </header>
  );
}
