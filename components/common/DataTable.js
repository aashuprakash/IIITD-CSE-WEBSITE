import { theme } from '@/theme/theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MUIDataTable from 'mui-datatables';

// set other global options as needed
const MuiTheme = createTheme({
  typography: {
    fontFamily: ['Montserrat'],
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          width: '75%',
          margin: 'auto',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          backgroundColor: 'transparent !important',
          '&:focus': {
            outline: 'none !important',
            boxShadow: 'none !important',
          },
          color: 'white', // Keeps the search input text white
          '&.Mui-focused': {
            color: 'white', // Ensures the text stays black when input is focused
            backgroundColor: 'transparent',
          },
        },
        root: {
          '&.MuiInput-underline:after': {
            borderBottomColor: 'white', // Changes the underline color when input is focused
          },
          '&.MuiInput-underline:before': {
            borderBottom: '1px solid white', // Changes the underline to white
          },
        },
      },
    },
    MUIDataTableToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main,
          minHeight: 0,
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main,
          padding: '0.5rem',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '1.1rem',
          width: 150,
          color: 'white',
        },
      },
    },
    MUIDataTableBodyCell: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
          textAlign: 'center',
        },
      },
    },
    MUIDataTablePagination: {
      styleOverrides: {
        selectIcon: {
          color: 'black', // Makes the dropdown icon black
        },
        select: {
          color: 'black', // Makes the rows per page text black
          '&.Mui-focused': {
            color: 'black', // Ensures the text stays black when dropdown is focused
            backgroundColor: 'white', // Changes background to white when dropdown is focused
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'black', // Changes default color for icons to white
        },
      },
    },
    // Add overrides for the MuiSelect component used within the pagination
    MuiSelect: {
      styleOverrides: {
        select: {
          color: 'black', // Text color for the select
          '&.Mui-focused': {
            backgroundColor: 'black', // Background color when select is focused
          },
        },
        icon: {
          color: 'black', // Dropdown icon color
        },
      },
    },
    // Add overrides for the search icon
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'white', // Changes the color of icon buttons to white
        },
      },
    },
  },
});

function DataTable({ data, columns, initialRows }) {
  let filter = false;
  const updatedColumns = columns.map((column) => {
    if (column.options.filter !== undefined)
      filter = filter || column.options.filter;
    return {
      ...column,
      options: {
        ...column.options,
        filter:
          column.options.filter !== undefined ? column.options.filter : false,
        sortThirdClickReset: true,
      },
    };
  });

  return (
    <ThemeProvider theme={MuiTheme}>
      <MUIDataTable
        data={data}
        columns={updatedColumns}
        options={{
          selectableRows: 'none',
          pagination: true,
          sort: true,
          filter,
          download: false,
          print: false,
          viewColumns: false,
          rowsPerPage: initialRows,
          rowsPerPageOptions: [5, 10, 15, 25, 50, 100, 250, 500, 1000],
        }}
      />
    </ThemeProvider>
  );
}

export default DataTable;
