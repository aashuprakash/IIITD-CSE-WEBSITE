import { useMemo } from 'react';

export default function useBottomBarLinks() {
  const links = useMemo(
    () => [
      {
        name: 'Home',
        menuItems: [],
      },
      {
        name: 'Academics',
        menuItems: [
          {
            name: 'BTech (CSE) Program',
            link: 'https://www.iiitd.ac.in/academics/btech/cse',
          },
          {
            name: 'BTech (CSAI) Program',
            link: 'https://www.iiitd.ac.in/academics/btech/csai',
          },
          {
            name: 'MTech Program',
            link: 'https://www.iiitd.ac.in/academics/mtech/cse',
          },
          {
            name: 'PhD Program',
            link: 'https://www.iiitd.ac.in/academics/phd',
          },
          {
            name: 'Course Catalog',
            link: '/academics/course-catalog',
          },
          {
            name: 'PEOs, POs & PSOs',
            link: '/academics/objectives',
          },
          {
            name: 'Guidelines',
            link: 'https://www.iiitd.ac.in/academics/resources',
          },
          {
            name: 'Approved Online Courses',
            link: '/academics/approved-online-courses',
          },
        ],
      },
      {
        name: 'Research',
        menuItems: [
          {
            name: 'Labs',
            link: '/research/labs',
          },
          {
            name: 'Themes',
            link: '/research/themes',
          },
          {
            name: 'Publications',
            link: '/research/publications',
          },
          {
            name: 'Projects',
            link: '/research/projects',
          },
        ],
      },
      {
        name: 'People',
        menuItems: [
          {
            name: 'Faculty',
            link: '/people/faculty',
          },
          {
            name: 'Staff / Teaching Fellows',
            link: '/people/staff-tf',
          },
          {
            name: 'Ph.D. Students',
            link: '/people/phd',
          },
          {
            name: 'M.Tech. Students',
            link: '/people/mtech',
          },
          {
            name: 'B.Tech. Students',
            link: '/people/btech',
          },
        ],
      },
      {
        name: 'News & Events',
        menuItems: [
          {
            name: 'Placements',
            link: '/news-and-events/placements',
          },
          {
            name: 'Media Coverage',
            link: '/news-and-events/media-coverage',
          },
          {
            name: 'Events',
            link: '/news-and-events/events',
          },
        ],
      },
      {
        name: 'Admissions',
        menuItems: [
          {
            name: 'B.Tech. Admissions',
            link: 'https://www.iiitd.ac.in/admission/btech/2023',
          },
          {
            name: 'M.Tech. Admissions',
            link: 'https://www.iiitd.ac.in/admission/mtech/2023',
          },
          {
            name: 'Ph.D. Admissions',
            link: 'https://www.iiitd.ac.in/admission/phd',
          },
        ],
      },
    ],
    [],
  );
  return links;
}
