import { getSheetData } from '@/app/api/sheets';
import { normalizeSheetData } from '@/utils/normaliseSheetData';
import PhdList from '@/components/people/phd/PhdList';

export default async function Phd() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Phd Students';

  const data = await getSheetData(spreadsheetId, range);
  const phdStudents = normalizeSheetData(data);
  phdStudents.forEach((entry) => {
    entry.funded_by = entry.funded_by.split(',').map((item) => item.trim());
  });

  return (
    <main className="padding-layout-2 px-2 md:px-10">
      <PhdList phdStudents={phdStudents} />
    </main>
  );
}
