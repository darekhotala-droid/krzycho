import { NextResponse } from 'next/server';
import ICAL from 'ical.js';

// Revalidate cache every 3600 seconds (1 hour)
export const revalidate = 3600;

export async function GET() {
  const AIRBNB_URL = 'https://www.airbnb.pl/calendar/ical/1227380167320183530.ics?t=72fddcc82ffb4355a876a42a31bb7add';

  try {
    const response = await fetch(AIRBNB_URL, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch iCal file, status: ${response.status}`);
    }

    const icalData = await response.text();
    
    // Parse iCal text
    const jcalData = ICAL.parse(icalData);
    const comp = new ICAL.Component(jcalData);
    
    // Get all events
    const vevents = comp.getAllSubcomponents('vevent');
    
    const bookedRanges = vevents.map(vevent => {
      const event = new ICAL.Event(vevent);
      return {
        start: event.startDate.toJSDate().toISOString(),
        end: event.endDate.toJSDate().toISOString(),
        summary: event.summary,
      };
    });

    return NextResponse.json({ bookedRanges });
  } catch (error) {
    console.error('Error fetching iCal data:', error);
    return NextResponse.json({ error: 'Failed to fetch calendar data' }, { status: 500 });
  }
}
