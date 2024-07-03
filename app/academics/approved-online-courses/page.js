import { getSheetData } from '@/app/api/sheets';
import { normalizeSheetData } from '@/utils/normaliseSheetData';
import ApprovedOnlineCoursesClient from '@/components/academics/approved-online-courses/ApprovedOnlineCoursesClient';

export default async function ApprovedOnlineCourses() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Online-Courses';

  const data = await getSheetData(spreadsheetId, range);
  const labs = normalizeSheetData(data);

  const structuredCourses = Object.values(
    labs.reduce((acc, course) => {
      const { term } = course;
      const id = term.split(' ').join('').toLowerCase();
      const hidden = false;

      if (!acc[id]) {
        acc[id] = {
          id,
          hidden,
          term,
          courseList: [course],
        };
      } else {
        acc[id].courseList.push(course);
      }

      return acc;
    }, {}),
  );

  return (
    <ApprovedOnlineCoursesClient
      Key="OnlineCourceClient"
      Courses={structuredCourses}
    />
  );
}
