import { NextResponse } from 'next/server';
import ICAL from 'ical.js';

// Revalidate cache every 3600 seconds (1 hour)
export const revalidate = 3600;

const CALENDAR_URLS = [
  'https://www.airbnb.pl/calendar/ical/1227380167320183530.ics?t=72fddcc82ffb4355a876a42a31bb7add', // Airbnb
  'https://ical.booking.com/v1/export?t=7c5ad9d3-e528-4576-b2bc-0f12c701ebf3' // Booking.com
];

export async function GET() {
  try {
    const bookedRanges = [];

    // Fetch and parse all calendars sequentially (or in parallel)
    for (const url of CALENDAR_URLS) {
      try {
        const response = await fetch(url, {
          next: { revalidate: 3600 }
        });
        
        if (!response.ok) {
          console.error(`Failed to fetch iCal from ${url}, status: ${response.status}`);
          continue; // Skip this calendar but proceed with others
        }

        const icalData = await response.text();
        const jcalData = ICAL.parse(icalData);
        const comp = new ICAL.Component(jcalData);
        const vevents = comp.getAllSubcomponents('vevent');
        
        const sourceName = url.includes('airbnb') ? 'Airbnb' : 'Booking.com';
        
        const ranges = vevents.map(vevent => {
          const event = new ICAL.Event(vevent);
          return {
            start: event.startDate.toJSDate().toISOString(),
            end: event.endDate.toJSDate().toISOString(),
            summary: event.summary || 'Booked',
            source: sourceName
          };
        });
        
        bookedRanges.push(...ranges);
      } catch (err) {
        console.error(`Error processing calendar ${url}:`, err);
      }
    }

    return NextResponse.json({ bookedRanges });
  } catch (error) {
    console.error('Critical error fetching iCal data:', error);
    return NextResponse.json({ error: 'Failed to fetch calendar data' }, { status: 500 });
  }
}
