"use client";
import styles from './Calendar.module.css';

export default function Calendar() {
  // Simple mock data for one month
  const daysInMonth = 31;
  const firstDayOffset = 3; // Starts on Wednesday (0=Sun, 1=Mon, etc.)
  
  // Mock booked days
  const bookedDays = [12, 13, 14, 25, 26, 27];

  const emptyCells = Array.from({ length: firstDayOffset }, (_, i) => <div key={`empty-${i}`} className={`${styles.day} ${styles.empty}`}></div>);
  
  const dayCells = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const isBooked = bookedDays.includes(day);
    const dayClass = isBooked ? styles.booked : styles.available;
    return (
      <div key={day} className={`${styles.day} ${dayClass}`}>
        {day}
      </div>
    );
  });

  return (
    <section id="calendar" className={styles.calendarSection}>
      <h2>Availability</h2>
      <p className="serif" style={{color: '#555', fontSize: '1.2rem'}}>Check our live calendar to plan your stay.</p>
      
      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
          <button className={styles.navButton}>&lt;</button>
          <h3>August 2026</h3>
          <button className={styles.navButton}>&gt;</button>
        </div>
        
        <div className={styles.weekdays}>
          <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        </div>
        
        <div className={styles.daysGrid}>
          {emptyCells}
          {dayCells}
        </div>
      </div>
      
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.dot} ${styles.dotAvailable}`}></div> Available
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.dot} ${styles.dotBooked}`}></div> Booked
        </div>
      </div>
    </section>
  );
}
