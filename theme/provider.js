'use client';

import PropTypes from 'prop-types';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from './theme';

function CustomThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomThemeProvider;
