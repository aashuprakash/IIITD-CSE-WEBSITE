'use client';
import DataTable from '@/components/common/DataTable';
import { useCallback } from 'react';

export default function BtechDataTable({ rows, initialRows }) {
  const getColumns = useCallback(() => {
    return [
      {
        name: 'Serial Number',
        options: {
          customBodyRender: (value) => {
            return <span className="body-xsmall">{value}</span>;
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
      {
        name: 'Roll Number',
        options: {
          customBodyRender: (value) => {
            return <span className="body-xsmall">{value}</span>;
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
      {
        name: 'Name',
        options: {
          customBodyRender: (value) => {
            return <span className="body-xsmall">{value}</span>;
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
      {
        name: 'Joining year',
        options: {
          filter: true,
          filterType: 'dropdown',
          filterOptions: {
            get names() {
              const yearsSet = new Set(rows.map((row) => row[3]));
              return Array.from(yearsSet).sort();
            },
            logic(year, filters) {
              if (filters.length === 0) return false;
              return !filters.includes(year);
            },
          },
          customBodyRender: (value) => {
            return <span className="body-xsmall">{value}</span>;
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
    ];
  }, []);

  return (
    <DataTable data={rows} columns={getColumns()} initialRows={initialRows} />
  );
}
