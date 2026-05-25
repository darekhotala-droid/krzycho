"use client";
import { useState } from 'react';
import styles from './Calendar.module.css';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOffset = new Date(year, month, 1).getDay();

  const monthName = currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  
  // Mock booked days (static for visual representation until iCal is linked)
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
          <button className={styles.navButton} onClick={prevMonth}>&lt;</button>
          <h3>{monthName}</h3>
          <button className={styles.navButton} onClick={nextMonth}>&gt;</button>
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
