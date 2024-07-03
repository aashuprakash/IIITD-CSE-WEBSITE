'use client';

import OnlineCourseCard from '@/components/academics/approved-online-courses/OnlineCourseCard';
import { Button } from '@mui/material';
import { useCallback, useState } from 'react';

export default function ApprovedOnlineCoursesClient({ key, Courses }) {
  const [courses, setCourses] = useState(Courses);
  const toggleTerm = useCallback((termId) => {
    setCourses((prevCourses) =>
      prevCourses.map((term) =>
        term.id === termId ? { ...term, hidden: !term.hidden } : term,
      ),
    );
  }, []);

  return (
    <>
      {courses.map((term) => (
        <div className="padding-layout-1" key={term.id}>
          <div className="w-11/12 max-w-screen-2xl mx-auto">
            <Button
              variant="contained"
              onClick={() => {
                toggleTerm(term.id);
              }}
              className="bg-primary-main text-white font-semibold text-sm">
              {term.term}
            </Button>
          </div>
          {!term.hidden && (
            <div className="padding-layout-2 grid grid-cols-1 mx-auto gap-2 sm:gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-11/12 max-w-screen-2xl">
              {term?.courseList.map((course) => (
                <OnlineCourseCard key={course.link} {...course} />
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
