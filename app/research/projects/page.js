import { getSheetData } from '@/app/api/sheets';
import ProjectCard from '@/components/research/projects/ProjectCard';
import { normalizeSheetData } from '@/utils/normaliseSheetData';
import InteractiveProjects from '@/components/research/projects/InteractiveProjects';

export default async function Projects() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Projects';

  const data = await getSheetData(spreadsheetId, range);
  const projects = normalizeSheetData(data);
  projects.forEach((entry) => {
    entry.funded_by = entry.funded_by.split(',').map((item) => item.trim());
  });
  return <InteractiveProjects projects={projects} />;
}
