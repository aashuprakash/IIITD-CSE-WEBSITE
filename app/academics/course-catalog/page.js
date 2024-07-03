import CourseCatalogTable from '@/components/academics/course-catalog/CourseCatalogTable';
import { getSheetData } from '@/app/api/sheets';
import Button from '@mui/material/Button';

export default async function CourseCatalog() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Course Catalog';
  const data = await getSheetData(spreadsheetId, range);

  return (
    <div className="page-layout-2">
      <div className="flex flex-row justify-center items-center p-8">
        <h1 className="body-2xlarge font-semibold text-primary-main mr-4">
          Course Catalog
        </h1>
        <Button
          variant="contained"
          disableElevation
          href="https://techtree.iiitd.edu.in/"
          style={{ backgroundColor: '#939598', color: 'white' }}>
          Tech tree
        </Button>
      </div>
      <div className="table-container mb-8">
        <CourseCatalogTable rows={data.slice(1)} initialRows={10} />
      </div>
    </div>
  );
}
