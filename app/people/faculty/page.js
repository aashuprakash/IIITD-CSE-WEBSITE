import { getSheetData } from '@/app/api/sheets';
import FacultyCard from '@/components/people/faculty/FacultyCard';
import { normalizeSheetData } from '@/utils/normaliseSheetData';

export default async function Faculty() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Faculty';

  const data = await getSheetData(spreadsheetId, range);
  const faculty = normalizeSheetData(data);
  return (
    <div className="grid gap-2 py-2 mx-auto grid-cols-2 sm:gap-4 sm:py-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5 lg:py-5 lg:grid-cols-5 2xl:grid-cols-7 w-11/12 max-w-screen-2xl">
      {faculty.map((prof, index) => (
        <FacultyCard key={faculty.linkedin} {...prof} />
      ))}
    </div>
  );
}
