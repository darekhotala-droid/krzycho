"use client";
import { useState, useEffect } from 'react';
import styles from './Calendar.module.css';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [bookedRanges, setBookedRanges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCalendar() {
      try {
        const res = await fetch('/api/calendar');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setBookedRanges(data.bookedRanges || []);
      } catch (err) {
        console.error("Calendar fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCalendar();
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOffset = new Date(year, month, 1).getDay();

  const monthName = currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const isPrevDisabled = year < today.getFullYear() || (year === today.getFullYear() && month <= today.getMonth());

  const isDateBooked = (d, m, y) => {
    const checkDate = new Date(y, m, d);
    return bookedRanges.some(range => {
      const start = new Date(range.start);
      const end = new Date(range.end);
      
      const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
      const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
      
      return checkDate >= startDay && checkDate < endDay;
    });
  };

  const emptyCells = Array.from({ length: firstDayOffset }, (_, i) => <div key={`empty-${i}`} className={`${styles.day} ${styles.empty}`}></div>);
  
  const dayCells = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const dateToCheck = new Date(year, month, day);
    const isPast = dateToCheck < today;
    const isBooked = isDateBooked(day, month, year);
    
    let dayClass = styles.available;
    if (isPast) {
      dayClass = styles.past;
    } else if (isBooked) {
      dayClass = styles.booked;
    }

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
          <button 
            className={styles.navButton} 
            onClick={prevMonth} 
            disabled={isPrevDisabled}
            style={{ opacity: isPrevDisabled ? 0.2 : 1, cursor: isPrevDisabled ? 'default' : 'pointer' }}
          >
            &lt;
          </button>
          <h3>{monthName} {isLoading && <span style={{fontSize: '0.8rem', color: '#999'}}>(loading...)</span>}</h3>
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
