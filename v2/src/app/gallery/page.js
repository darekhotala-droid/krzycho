"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import styles from './Gallery.module.css';

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  
  const images = [
    "/images/photo-dalakit-house-villa-two-siquijor-9.jfif",
    "/images/IMG-1.jpg",
    "/images/IMG-2.jpg",
    "/images/c176c3ff-164a-499e-acec-ac2d26aaab1e.avif",
    "/images/photo-dalakit-house-villa-two-siquijor-9.jfif",
    "/images/IMG-1.jpg"
  ];

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.header}>
          <Link href="/" className={styles.backBtn}>&larr; Back to Home</Link>
          <h1>Photo Gallery</h1>
          <p className="serif" style={{color: '#555', fontSize: '1.2rem'}}>Immerse yourself in the jungle</p>
        </div>
        
        <div className={styles.grid}>
          {images.map((img, i) => (
            <div key={i} className={styles.imageCard} onClick={() => setLightboxIndex(i)} style={{cursor: 'pointer'}}>
              <img src={img} alt={`Gallery image ${i + 1}`} loading="lazy" />
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
