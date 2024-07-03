import { getSheetData } from '@/app/api/sheets';
import { normalizeSheetData } from '@/utils/normaliseSheetData';
import InteractiveEvents from '@/components/news-and-events/events/InteractiveEvents';

export default async function EventsPage() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Events';

  const data = await getSheetData(spreadsheetId, range);
  const eventsData = normalizeSheetData(data);
  return (
    <div>
      <InteractiveEvents eventsData={eventsData} />
    </div>
  );
}
