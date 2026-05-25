"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './GalleryPreview.module.css';
import Lightbox from './Lightbox';

export default function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const images = [
    "/images/178eae31-2a15-43d7-a30d-7c21bacd6598.JPG",
    "/images/IMG_9583.JPG",
    "/images/IMG_9576.JPG",
    "/images/IMG_9591.JPG"
  ];

  return (
    <section id="gallery" className={styles.gallerySection}>
      <h2>A Glimpse of Paradise</h2>
      <p className="serif" style={{color: '#555', fontSize: '1.2rem'}}>Swipe to see more of the property</p>

      <div className={styles.scroller}>
        {images.map((img, i) => (
          <div key={i} className={styles.imageWrapper} onClick={() => setLightboxIndex(i)} style={{cursor: 'pointer'}}>
            <img src={img} alt={`Dalakit House Villa Two - view ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <div className={styles.btnContainer}>
        <Link href="/gallery" className={styles.btnGallery}>
          View Full Gallery
        </Link>
      </div>

      <Lightbox 
        images={images} 
        initialIndex={lightboxIndex === -1 ? 0 : lightboxIndex} 
        isOpen={lightboxIndex !== -1} 
        onClose={() => setLightboxIndex(-1)} 
      />
    </section>
  );
}
