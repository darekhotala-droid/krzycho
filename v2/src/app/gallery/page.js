"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import styles from './Gallery.module.css';

const galleryData = {
  "All": [],
  "Outside": [
    "/images/IMG-1.jpg",
    "/images/IMG-2.jpg",
    "/images/c176c3ff-164a-499e-acec-ac2d26aaab1e.avif",
    "/images/photo-dalakit-house-villa-two-siquijor-9.jfif",
    "/images/IMG_9591.JPG"
  ],
  "Bedroom": [
    "/images/IMG_9583.JPG",
    "/images/IMG_9584.JPG"
  ],
  "Kitchen & Living": [
    "/images/178eae31-2a15-43d7-a30d-7c21bacd6598.JPG",
    "/images/IMG_9585.JPG",
    "/images/IMG_9368.PNG"
  ],
  "Bathroom": [
    "/images/IMG_9576.JPG"
  ]
};

const allImagesSet = new Set();
Object.keys(galleryData).forEach(key => {
  if (key !== "All") {
    galleryData[key].forEach(img => allImagesSet.add(img));
  }
});
galleryData["All"] = Array.from(allImagesSet);

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  
  const images = galleryData[activeCategory];

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.header}>
          <Link href="/" className={styles.backBtn}>&larr; Back to Home</Link>
          <h1>Photo Gallery</h1>
          <p className="serif" style={{color: '#555', fontSize: '1.2rem'}}>Explore our spaces</p>
        </div>

        <div className={styles.categories}>
          {Object.keys(galleryData).map(cat => (
            <button 
              key={cat} 
              className={`${styles.catBtn} ${activeCategory === cat ? styles.activeCat : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className={styles.grid}>
          {images.map((img, i) => (
            <div key={img} className={styles.imageCard} onClick={() => setLightboxIndex(i)} style={{cursor: 'pointer'}}>
              <img src={img} alt={`${activeCategory} image ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
      
      <Lightbox 
        images={images} 
        initialIndex={lightboxIndex === -1 ? 0 : lightboxIndex} 
        isOpen={lightboxIndex !== -1} 
        onClose={() => setLightboxIndex(-1)} 
      />
    </>
  );
}
