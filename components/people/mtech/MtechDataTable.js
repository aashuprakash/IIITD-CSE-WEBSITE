'use client';
import { useCallback } from 'react';
import DataTable from '@/components/common/DataTable';
import LinkedIn from '@mui/icons-material/LinkedIn';

export default function MtechDataTable({ data, initialRows }) {
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
        name: 'Email',
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
        name: 'Research Interests',
        options: {
          customBodyRender: (value) => {
            return (
              <span className="body-xsmall">
                {value == null ? 'Not Available' : value}
              </span>
            );
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
      {
        name: 'LinkedIn',
        options: {
          customBodyRender: (value) => {
            return (
              <a href={value} target="_blank" rel="noreferrer">
                <LinkedIn className="text-primary-main body-2xlarge" />
              </a>
            );
          },
        },
      },
      {
        name: 'Thesis',
        options: {
          customBodyRender: (value) => {
            return (
              <span className="body-xsmall">
                {value == null ? 'Not Available' : value}
              </span>
            );
          },
          customHeadLabelRender: (value) => {
            return <span className="body-small">{value.name}</span>;
          },
        },
      },
    ];
  }, []);

  return (
    <DataTable data={data} columns={getColumns()} initialRows={initialRows} />
  );
}
