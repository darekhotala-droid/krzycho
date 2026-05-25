import styles from './Amenities.module.css';

export default function Amenities() {
  return (
    <section id="amenities" className={styles.amenities}>
      <h2>Comfort in the Jungle</h2>
      <p className={`${styles.subtitle} serif`}>Everything you need for full relaxation</p>
      
      <div className={styles.amenitiesGrid}>
        <div className={styles.amenityCard}>
          <h3>🛏️ Exceptional Sleep</h3>
          <p>1 spacious bedroom with a queen-size bed, surrounded by the sounds of nature.</p>
        </div>
        <div className={styles.amenityCard}>
          <h3>🍳 Full Kitchen</h3>
          <p>A fully equipped kitchen, ready for preparing local specialties.</p>
        </div>
        <div className={styles.amenityCard}>
          <h3>📡 Starlink WiFi</h3>
          <p>Reliable, fast satellite internet, perfect for remote work.</p>
        </div>
        <div className={styles.amenityCard}>
          <h3>🚿 Modern Bathroom</h3>
          <p>Hot water and a bidet for your maximum comfort.</p>
        </div>
      </div>
    </section>
  );
}
