import { getSheetData } from '@/app/api/sheets';
import { normalizeSheetData } from '@/utils/normaliseSheetData';
import InteractivePlacements from '@/components/news-and-events/placements/InteractivePlacements';

export default async function PlacementsPage() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Placements';

  const data = await getSheetData(spreadsheetId, range);
  const placementsData = normalizeSheetData(data);
  return (
    <div>
      <InteractivePlacements placementsData={placementsData} />
    </div>
  );
}
