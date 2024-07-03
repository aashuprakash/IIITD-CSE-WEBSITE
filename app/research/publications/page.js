import { normalizeSheetData } from '@/utils/normaliseSheetData';
import { getSheetData } from '../../api/sheets';
import PublicationsList from '@/components/research/publications/PublicationsList';

export default async function Publications() {
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
    <main className="padding-layout-2 px-2 md:px-10">
      <h1 className="heading-1 text-primary-main">Publications</h1>
      <PublicationsList dblpIds={dblpIds} />
    </main>
  );
}
