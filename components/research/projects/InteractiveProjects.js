// components/research/projects/InteractiveProjects.js
'use client';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProjectCard from './ProjectCard';

export default function InteractiveProjects({ projects }) {
  // Extract unique years from projects, sort them in descending order, and add 'Others'
  const years = [
    ...new Set(
      projects.map((project) => project.year).filter(Boolean), // Filter out undefined or empty years
    ),
  ].sort((a, b) => b.localeCompare(a)); // Sort in descending order

  // Add 'Others' to the list of years for projects with no year specified
  years.push('Others');

  const [selectedYear, setSelectedYear] = useState(years[0]);

  const handleYearChange = (event, newValue) => {
    setSelectedYear(newValue);
  };

  // Filter projects based on the selected year
  const filteredProjects = projects.filter((project) =>
    selectedYear === 'Others' ? !project.year : project.year === selectedYear,
  );

  return (
    <div className="padding-layout-2">
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
      <div className="grid grid-cols-2 mx-auto py-4 lg:py-5 gap-2 sm:gap-4 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-11/12 max-w-screen-2xl">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
