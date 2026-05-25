import Link from 'next/link';
import styles from './GalleryPreview.module.css';

export default function GalleryPreview() {
  const images = [
    "/images/IMG-1.jpg",
    "/images/IMG-2.jpg",
    "/images/c176c3ff-164a-499e-acec-ac2d26aaab1e.avif",
    "/images/photo-dalakit-house-villa-two-siquijor-9.jfif"
  ];

  return (
    <section id="gallery" className={styles.gallerySection}>
      <h2>A Glimpse of Paradise</h2>
      <p className="serif" style={{color: '#555', fontSize: '1.2rem'}}>Swipe to see more of the property</p>

      <div className={styles.scroller}>
        {images.map((img, i) => (
          <div key={i} className={styles.imageWrapper}>
            <img src={img} alt={`Dalakit House Villa Two - view ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <div className={styles.btnContainer}>
        <Link href="/gallery" className={styles.btnGallery}>
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}
