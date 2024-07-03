'use client';

import DataTable from '@/components/common/DataTable';
import { useCallback } from 'react';
import Chip from '@mui/material/Chip';

const colors = [
  '#B8D0EA',
  '#D4BACD',
  '#EEEECD',
  '#9CD1CE',
  '#E1BEBE',
  '#BFB3D7',
];

let clr = 0;

const commonOptions = (name) => ({
  customBodyRender: (value) => {
    if (
      name === 'Code' ||
      name === 'Pre-requisites' ||
      name === 'Anti-requisites'
    ) {
      if (value === 'None') {
        return <span className="body-xsmall">None</span>;
      } else {
        let courses = value.split(', ');
        return courses.map((val, index) => {
          if (clr === 6) clr = 0;
          return (
            <Chip
              key={index}
              label={val}
              className="body-xsmall mr-2 mb-2"
              style={{ backgroundColor: colors[clr++] }}
            />
          );
        });
      }
    } else {
      return <span className="body-xsmall">{value}</span>;
    }
  },
  customHeadLabelRender: (value) => {
    return <span className="body-small">{value.name}</span>;
  },
});

export default function CourseCatalogTable({ rows, initialRows }) {
  const getColumns = useCallback(() => {
    return [
      {
        name: 'Code',
        options: {
          ...commonOptions('Code'),
          filter: true,
          filterType: 'checkbox',
          filterOptions: {
            names: ['1xx', '2xx', '3xx', '4xx', '5xx', '6xx', '7xx'],
            logic(code, filters) {
              if (filters.length === 0) return false;
              let codes = code.split(',').map((c) => c.trim());
              const allCodes = [];
              codes.forEach((c) => {
                if (c.includes('/')) {
                  allCodes.push(...c.split('/'));
                } else {
                  allCodes.push(c);
                }
              });
              return !filters.some((filter) => {
                const prefix = filter.charAt(0);
                return allCodes.some((c) => c.match(/\d/)?.[0] == prefix);
              });
            },
          },
        },
      },
      { name: 'Name', options: commonOptions('Name') },
      { name: 'Acronym', options: commonOptions('Acronym') },
      { name: 'Credits', options: commonOptions('Credits') },
      { name: 'Semester', options: commonOptions('Semester') },
      { name: 'Pre-requisites', options: commonOptions('Pre-requisites') },
      { name: 'Anti-requisites', options: commonOptions('Anti-requisites') },
      { name: 'Last offered in', options: commonOptions('Last offered in') },
    ];
  }, []);

  return (
    <DataTable data={rows} columns={getColumns()} initialRows={initialRows} />
  );
}
