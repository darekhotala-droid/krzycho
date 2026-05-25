import styles from './AboutIsland.module.css';

export default function AboutIsland() {
  return (
    <section className={styles.islandSection}>
      <div className={styles.content}>
        <h2>Discover Siquijor Island</h2>
        <p className="serif">The Mystical Heart of the Philippines</p>
        <div className={styles.textBody}>
          <p>
            Known as the "Island of Fire," Siquijor is a hidden gem where pristine white-sand beaches meet lush, untouched jungles. Unlike the crowded tourist hotspots, Siquijor offers a serene, authentic Philippine experience wrapped in natural beauty and local legends. 
          </p>
          <p>
            Dive into crystal-clear waters, explore spectacular waterfalls like Cambugahay, and feel the magic of local traditions. Whether you seek thrilling adventures or peaceful sunsets under swaying palm trees, Siquijor is a tropical paradise that will capture your heart and provide the ultimate backdrop for your stay.
          </p>
        </div>
      </div>
    </section>
  );
}
