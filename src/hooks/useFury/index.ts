import { useContext, createContext } from 'react';
import { ThemeOptions } from '@mui/material/styles';

/**
 * Context interface
 */
export interface FuryContextType {
  /**
   * Active theme
   */
  themeActive: ThemeOptions;
  /**
   * Set theme by ID
   */
  themeSetById: (themeId: string) => void;
}

/**
 * Initial value
 */
const init: FuryContextType = {
  themeActive: {},
  themeSetById: () => undefined,
};

/**
 * FuryContext
 */
export const FuryContext = createContext<FuryContextType>(init);

/**
 * useFury
 */
export const useFury = () => useContext(FuryContext);
