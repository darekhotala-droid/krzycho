"use client";
import { useEffect, useState, useCallback } from 'react';
import styles from './Lightbox.module.css';

export default function Lightbox({ images, initialIndex, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  const showNext = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const showPrev = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  }, [onClose, showNext, showPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) showNext();
    if (distance < -minSwipeDistance) showPrev();
  };

  if (!isOpen) return null;

  return (
    <div 
      className={styles.overlay} 
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button className={styles.closeBtn} onClick={onClose}>&times;</button>
      
      <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={showPrev}>&#10094;</button>
      
      <div className={styles.imageContainer} onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt={`Gallery view ${currentIndex + 1}`} />
      </div>

      <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={showNext}>&#10095;</button>
      
      <div className={styles.counter}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
