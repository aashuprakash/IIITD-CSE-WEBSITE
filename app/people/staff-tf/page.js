import { getSheetData } from '@/app/api/sheets';
import StaffCard from '@/components/people/staff/StaffCard';
import TfCard from '@/components/people/teaching-fellows/TfCard';
import { normalizeSheetData } from '@/utils/normaliseSheetData';

export default async function Staff() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const rangeStaff = 'Staff';
  const rangeTF = 'Teaching Fellows';

  const dataStaff = await getSheetData(spreadsheetId, rangeStaff);
  const dataTF = await getSheetData(spreadsheetId, rangeTF);

  const staff = normalizeSheetData(dataStaff);
  const tfs = normalizeSheetData(dataTF);

  return (
    <div className="grid grid-cols-2 mx-auto py-4 lg:py-5 gap-2 sm:gap-4 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-11/12 max-w-screen-2xl">
      {staff.map((staff) => (
        <StaffCard key={staff.name} {...staff} />
      ))}

      {tfs.map((tf) => (
        <TfCard key={tf.name} {...tf} />
      ))}
    </div>
  );
}
