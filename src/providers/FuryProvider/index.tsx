import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

/**
 * FuryProvider
 */
export const FuryProvider = ({ children }: FuryProviderProps) => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

/**
 * FuryProviderProps
 */
export interface FuryProviderProps {
  /**
   * children
   */
  children: JSX.Element;
}
