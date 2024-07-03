import { getSheetData } from '@/app/api/sheets';
import { normalizeSheetData } from '@/utils/normaliseSheetData';
import InteractiveMediaCoverage from '@/components/news-and-events/media-coverage/InteractiveMediaCoverage';

export default async function MediaCoveragePage() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Media Coverage';

  const data = await getSheetData(spreadsheetId, range);
  const mediacoverageData = normalizeSheetData(data);
  return (
    <div>
      <InteractiveMediaCoverage mediacoverageData={mediacoverageData} />
    </div>
  );
}
