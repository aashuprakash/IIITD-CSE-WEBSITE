// components/events/InteractiveEvents.js
'use client';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EventCard from './EventsCard';

export default function InteractiveEvents({ eventsData }) {
  const years = [...new Set(eventsData.map((event) => event.year))];
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const handleYearChange = (event, newValue) => {
    setSelectedYear(newValue);
  };

  const filteredEvents = eventsData.filter(
    (event) => event.year === selectedYear,
  );

  return (
    <div className="padding-layout-2">
      {/* Year tabs */}
      <Tabs value={selectedYear} onChange={handleYearChange} centered>
        {years.map((year) => (
          <Tab
            key={year}
            label={year}
            value={year}
            sx={{ fontSize: '1.3rem' }}
          />
        ))}
      </Tabs>

      {/* Event cards */}
      <div className="grid grid-cols-1 mx-auto py-4 lg:py-5 gap-2 sm:gap-4 lg:gap-5 w-11/12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredEvents.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            imageLink={event.imagelink}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}
