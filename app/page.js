import Banner from '@/components/landing/Banner';
import MissionAndVision from '@/components/landing/MissionAndVision';
import RecentPublications from '@/components/landing/RecentPublications';
import { normalizeSheetData } from '@/utils/normaliseSheetData';
import { getSheetData } from './api/sheets';

export default async function Home() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Publications';

  const data = await getSheetData(spreadsheetId, range);
  const publications = normalizeSheetData(data);

  const dblpIds = [];
  publications.forEach((pub) => {
    if (pub.dblp) {
      dblpIds.push(pub.dblp);
    }
  });

  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <div className="[&>*:nth-child(even)]:bg-gg w-full">
        <Banner />
        <MissionAndVision />
        <RecentPublications dblpIds={dblpIds} />
      </div>
    </main>
  );
}
